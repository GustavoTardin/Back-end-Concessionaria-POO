import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import cars from './mocks/carMock';
import CarService from '../../../src/Services/CarService';
import MotorcycleService from '../../../src/Services/MotorcycleService';
import motorcycles from './mocks/motorcycleMock';
import IMotorcycle from '../../../src/Interfaces/IMotorcycle';

describe('Testa camada Service dos veículos', function () {
  const carService = new CarService();
  const motorcycleService = new MotorcycleService();
  it('testa função getAll da Abstract, utilizando a CarService de exemplo', async function () {
    // arrange
    sinon.stub(Model, 'find').resolves(cars);
    // action
    const result = await carService.getAll();
    // expect
    expect(result).to.be.deep.equal(cars);
  });

  it('testa função getById da Abstract, utilizando a CarService de exemplo', async function () {
    // arrange
    sinon.stub(Model, 'findById').resolves(cars[0]);
    // action

    const car = await carService.getById('642ae4c9dcf09bd355da6340');

    // expect

    expect(car).to.be.deep.equal(cars[0]);
  });

  it(
    'testa função register da Abstract, utilizando a MotorcycleService de exemplo',
    async function () {
    // arrange
      sinon.stub(Model, 'create').resolves(motorcycles[0]);

      // action
      const newMotorcycle: IMotorcycle = {
        model: 'Honda Cb 600f Hornet',
        year: 2005,
        color: 'Yellow',
        status: true,
        buyValue: 30,
        category: 'Street',
        engineCapacity: 600,
      };
      const result = await motorcycleService.register(newMotorcycle);

      // expect
      expect(result).to.be.deep.equal(motorcycles[0]);
    },
  );

  it(
    'testa função updateById da Abstract, utilizando a MotorcycleService de exemplo',
    async function () {
      // arrange 
      sinon.stub(Model, 'findByIdAndUpdate').resolves(motorcycles[1]);
      const freshMotocycle: IMotorcycle = {
        model: 'XR',
        year: 2020,
        color: 'Red',
        status: true,
        buyValue: 100,
        category: 'Street',
        engineCapacity: 900,
      };
      const result = await motorcycleService.updateById(
        '642aeadd10799b29b4060aa4',
        freshMotocycle,
      );
      // action
      expect(result).to.be.deep.equal(motorcycles[1]);
    },
  );
  it('testa função deleteById da Abstract,utilizando a CarService de exemplo', async function () {
    // arrange 
    sinon.stub(Model, 'findByIdAndDelete').resolves(cars[3]);

    // action

    const result = await carService.deleteById('642ae563dcf09bd355da6346');

    // expect

    expect(result).to.be.deep.equal(undefined);
  });

  afterEach(function () {
    sinon.restore();
  });
});