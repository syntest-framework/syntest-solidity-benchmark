const YieldFarmLP2 = artifacts.require("YieldFarmLP2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('YieldFarmLP2', (accounts) => {
	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2hEgwRw = await YieldFarmLP2.new({from: accounts[2]});
		const uintmOCaPB5 = BigInt("151")
		const uintO1oXd2D = BigInt("458")
		const addressrGIHpT = accounts[2]
		const uintZCRIqh9 = BigInt("1533")
		const addressopN5eUs = accounts[2]
//		const uintBRggxG5 = await YieldFarmLP2hEgwRw.massHarvest.call({from: accounts[4]});
//		const uintwMIxPV = await YieldFarmLP2hEgwRw.harvest.call(uintmOCaPB5, {from: accounts[2]});
//		const uintnqdA1k = await YieldFarmLP2hEgwRw.getPoolSize.call(uintO1oXd2D, {from: accounts[4]});
//		const uintOcbl1As = await YieldFarmLP2hEgwRw.claimable.call(addressrGIHpT, {from: accounts[0]});
//		const uintRTXFGK7 = await YieldFarmLP2hEgwRw.getEpochStake.call(addressopN5eUs, uintZCRIqh9, {from: accounts[3]});

		await expect(YieldFarmLP2hEgwRw.massHarvest.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2Cr7FUiv = await YieldFarmLP2.new({from: accounts[2]});
		const address8FVUrd = accounts[0]
		const uintEVwtfFh = BigInt("881")
//		const uintjobeuxr = await YieldFarmLP2Cr7FUiv.claimable.call(address8FVUrd, {from: accounts[4]});
//		const uintq6fh0g2 = await YieldFarmLP2Cr7FUiv.getPoolSize.call(uintEVwtfFh, {from: accounts[2]});
//		const uintsy0ImSt = await YieldFarmLP2Cr7FUiv.massHarvest.call({from: accounts[4]});

		await expect(YieldFarmLP2Cr7FUiv.claimable.call(address8FVUrd, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2N0Q34rq = await YieldFarmLP2.new({from: accounts[2]});
		const addresstiBqtyO = accounts[3]
		const addressSeMedKG = accounts[2]
		const addressQf74j9U = accounts[0]
		const addressMuhySMh = accounts[2]
		const addressLbjnGGT = "0x0000000000000000000000000000000000000001"
//		const addressGwE2e6m = await YieldFarmLP2N0Q34rq.initialize.call(addressMuhySMh, addressQf74j9U, addressSeMedKG, addresstiBqtyO, {from: "0x0000000000000000000000000000000000000001"});
//		const uintBh7uQnz = await YieldFarmLP2N0Q34rq.massHarvest.call({from: accounts[3]});
//		const uinte2OSjOl = await YieldFarmLP2N0Q34rq.massHarvest.call({from: accounts[0]});
//		const uinthNjbjLa = await YieldFarmLP2N0Q34rq.claimable.call(addressLbjnGGT, {from: accounts[5]});

		await expect(YieldFarmLP2N0Q34rq.initialize.call(addressMuhySMh, addressQf74j9U, addressSeMedKG, addresstiBqtyO, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2rgEaExY = await YieldFarmLP2.new({from: accounts[0]});
		const uintrqvoe70 = BigInt("1551")
		const addressTz7jn2d = "0x0000000000000000000000000000000000000001"
//		const uintqkwuGa = await YieldFarmLP2rgEaExY.harvest.call(uintrqvoe70, {from: accounts[1]});
//		const uintq79kXNJ = await YieldFarmLP2rgEaExY.claimable.call(addressTz7jn2d, {from: accounts[3]});
//		const uintJIUtMQ = await YieldFarmLP2rgEaExY.getCurrentEpoch.call({from: accounts[5]});

		await expect(YieldFarmLP2rgEaExY.harvest.call(uintrqvoe70, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2nbdDuPi = await YieldFarmLP2.new({from: accounts[3]});
		const uintlWWC9a5 = BigInt("1891")
		const addressqUvZ0XZ = accounts[0]
		const address87QhRx = accounts[3]
		const addressSL46Vs2 = accounts[0]
		const addressvfoGZw = accounts[3]
//		const uintjdfUxSH = await YieldFarmLP2nbdDuPi.getPoolSize.call(uintlWWC9a5, {from: accounts[0]});
//		const addressLiz4urM = await YieldFarmLP2nbdDuPi.initialize.call(addressvfoGZw, addressSL46Vs2, address87QhRx, addressqUvZ0XZ, {from: accounts[2]});
//		const uint6k9csI = await YieldFarmLP2nbdDuPi.massHarvest.call({from: accounts[0]});

		await expect(YieldFarmLP2nbdDuPi.getPoolSize.call(uintlWWC9a5, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2ZXwHrqY = await YieldFarmLP2.new({from: accounts[0]});
		const uintHSfIMey = BigInt("802")
		const uintYEVPRjx = BigInt("383")
		const addresswezXDZG = accounts[0]
		const uintHDXOWl = BigInt("430")
//		const uintJCuow21 = await YieldFarmLP2ZXwHrqY.getCurrentEpoch.call({from: accounts[3]});
//		const uint9fPk4B = await YieldFarmLP2ZXwHrqY.harvest.call(uintHSfIMey, {from: accounts[1]});
//		const uintQEw91u5 = await YieldFarmLP2ZXwHrqY.getEpochStake.call(addresswezXDZG, uintYEVPRjx, {from: accounts[0]});
//		const uintHngrxoz = await YieldFarmLP2ZXwHrqY.harvest.call(uintHDXOWl, {from: accounts[0]});

		await expect(YieldFarmLP2ZXwHrqY.getCurrentEpoch.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2FOLqKag = await YieldFarmLP2.new({from: accounts[5]});
		const addressQE0CiD = accounts[2]
		const addressDJ2q1ws = accounts[4]
		const uintTUOEhnk = await YieldFarmLP2FOLqKag.userLastEpochIdHarvested.call({from: accounts[1]});
//		const uintnfFf0Gs = await YieldFarmLP2FOLqKag.claimable.call(addressQE0CiD, {from: accounts[1]});
//		const uintrokZ5MU = await YieldFarmLP2FOLqKag.claimable.call(addressDJ2q1ws, {from: accounts[1]});

		assert.equal(uintTUOEhnk, BigInt("0"))
		await expect(YieldFarmLP2FOLqKag.claimable.call(addressQE0CiD, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2VfZxFr = await YieldFarmLP2.new({from: accounts[4]});
		const uintQRB6HtL = BigInt("537")
		const addressL3kfvFU = accounts[0]
		const addressuLSnUg = accounts[5]
		const addressrE679fo = accounts[4]
		const addressLJUYRMa = "0x0000000000000000000000000000000000000001"
		const addresseMFCoAS = accounts[5]
		const addressvHoEtWI = accounts[2]
		const uinthdCyyos = BigInt("1970")
//		const uintm4pnY3V = await YieldFarmLP2VfZxFr.getEpochStake.call(addressL3kfvFU, uintQRB6HtL, {from: accounts[2]});
//		const uintNhC4Em9 = await YieldFarmLP2VfZxFr.claimable.call(addressuLSnUg, {from: "0x0000000000000000000000000000000000000001"});
//		const addressvhyzayF = await YieldFarmLP2VfZxFr.initialize.call(addressvHoEtWI, addresseMFCoAS, addressLJUYRMa, addressrE679fo, {from: accounts[4]});
//		const uintJD3JYGT = await YieldFarmLP2VfZxFr.getCurrentEpoch.call({from: accounts[0]});
//		const uintTqE96Kr = await YieldFarmLP2VfZxFr.harvest.call(uinthdCyyos, {from: accounts[1]});

		await expect(YieldFarmLP2VfZxFr.getEpochStake.call(addressL3kfvFU, uintQRB6HtL, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2Ukl25nd = await YieldFarmLP2.new({from: "0x0000000000000000000000000000000000000001"});
		const uinthLwtu4U = BigInt("921")
		const uintPlPTzmK = await YieldFarmLP2Ukl25nd.getPoolSize.call(uinthLwtu4U, {from: accounts[5]});
		const uintUcOJtqC = await YieldFarmLP2Ukl25nd.massHarvest.call({from: accounts[2]});
		const uinteMQKjBq = await YieldFarmLP2Ukl25nd.getCurrentEpoch.call({from: accounts[0]});
	});
})