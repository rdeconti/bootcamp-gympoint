import Sequelize from 'sequelize';

import User from '../app/models/User';
import Student from '../app/models/Student';
import Plan from '../app/models/Plan';
import Membership from '../app/models/Membership';
import Checkin from '../app/models/Checkin';
import Help_order from '../app/models/Help_order';

import databaseConfig from '../config/database';

const models = [User, Student, Plan, Membership, Checkin, Help_order];

class Database {
  constructor() {
    this.connection = new Sequelize(databaseConfig);
    this.init();
    this.associate();
  }

  init() {
    models.forEach(model => model.init(this.connection));
  }

  associate() {
    models.forEach(model => {
      if (model.associate) {
        model.associate(this.connection.models);
      }
    });
  }
}

export default new Database();
