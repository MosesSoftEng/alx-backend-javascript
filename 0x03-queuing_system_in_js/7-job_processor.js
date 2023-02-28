#!/usr/bin/yarn dev
import { createQueue, Job } from 'kue';

const BLACKLISTED_NUMBERS = ['4153518780', '4153518781'];
const queue = createQueue();

/**
 * Sends a push notification to a user.
 * @param {String} phoneNumber
 * @param {String} message
 * @param {Job} job
 * @param {*} done
 */
const sendNotification = (phoneNumber, message, job, done) => {
  let total = 2, pending = 2;
  let sendInterval = setInterval(() => {
    if (total - pending <= total / 2) {
      job.progress(total - pending, total);
    }
    if (BLACKLISTED_NUMBERS.includes(phoneNumber)) {
      done(new Error(`Phone number ${phoneNumber} is blacklisted`));
      clearInterval(sendInterval);
      return;
    }
    if (total === pending) {
      console.log(
        `Sending notification to ${phoneNumber},`,
        `with message: ${message}`,
      );
    }
    --pending || done();
    pending || clearInterval(sendInterval);
  }, 1000);
};

queue.process('push_notification_code_2', 2, (job, done) => {
  sendNotification(job.data.phoneNumber, job.data.message, job, done);
});
