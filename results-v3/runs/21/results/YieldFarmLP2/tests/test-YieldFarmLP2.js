const YieldFarmLP2 = artifacts.require("YieldFarmLP2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('YieldFarmLP2', (accounts) => {
	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2ZRT4QEC = await YieldFarmLP2.new({from: accounts[4]});
		const uintMbVKCIn = BigInt("1892")
		const addressC9HX786 = "0x0000000000000000000000000000000000000001"
		const addressaplDMFj = "0x0000000000000000000000000000000000000001"
		const address7fu4uP = accounts[0]
		const uintsZTMOPl = await YieldFarmLP2ZRT4QEC.getEpochStake.call(addressC9HX786, uintMbVKCIn, {from: accounts[1]});
		const uintvwWoVRK = await YieldFarmLP2ZRT4QEC.getCurrentEpoch.call({from: accounts[0]});
		const uintJH0WTFN = await YieldFarmLP2ZRT4QEC.claimable.call(addressaplDMFj, {from: "0x0000000000000000000000000000000000000001"});
		const uintXk9FnSU = await YieldFarmLP2ZRT4QEC.claimable.call(address7fu4uP, {from: accounts[0]});

		await expect(YieldFarmLP2ZRT4QEC.getEpochStake.call(addressC9HX786, uintMbVKCIn, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2Q0eZiUC = await YieldFarmLP2.new({from: accounts[2]});
		const addresslWJ4DRF = accounts[5]
		const uintMunUvbx = BigInt("836")
		const addressOLpHYCo = accounts[1]
		const uintNTOeOPC = BigInt("720")
		const addressO5Hd4W1 = accounts[0]
		const uintELKItz = await YieldFarmLP2Q0eZiUC.claimable.call(addresslWJ4DRF, {from: accounts[4]});
		const uintEOHhfb = await YieldFarmLP2Q0eZiUC.getEpochStake.call(addressOLpHYCo, uintMunUvbx, {from: accounts[0]});
		const uinttj9VPBr = await YieldFarmLP2Q0eZiUC.getEpochStake.call(addressO5Hd4W1, uintNTOeOPC, {from: accounts[3]});
		const uintmonzwPH = await YieldFarmLP2Q0eZiUC.massHarvest.call({from: accounts[3]});
		const uintqluiqg = await YieldFarmLP2Q0eZiUC.getCurrentEpoch.call({from: accounts[4]});

		await expect(YieldFarmLP2Q0eZiUC.claimable.call(addresslWJ4DRF, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2KUbgmwL = await YieldFarmLP2.new({from: accounts[2]});
		const uintOsjJeD7 = BigInt("1805")
		const uintJoSCfgk = BigInt("1874")
		const uintzBw1QAR = BigInt("12")
		const uintJjeRHjy = await YieldFarmLP2KUbgmwL.harvest.call(uintOsjJeD7, {from: accounts[2]});
		const uintojE3dwT = await YieldFarmLP2KUbgmwL.getCurrentEpoch.call({from: accounts[0]});
		const uintf716HM = await YieldFarmLP2KUbgmwL.getPoolSize.call(uintJoSCfgk, {from: accounts[0]});
		const uinto7QDpVq = await YieldFarmLP2KUbgmwL.harvest.call(uintzBw1QAR, {from: accounts[2]});

		await expect(YieldFarmLP2KUbgmwL.harvest.call(uintOsjJeD7, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2xZGBVp2 = await YieldFarmLP2.new({from: accounts[1]});
		const addressLcJGf4F = accounts[4]
		const addressILlJK1 = accounts[2]
		const addressgV6nA2I = accounts[3]
		const addressAgLmadm = accounts[0]
		const addresse74tCJU = accounts[3]
		const uintcdRBtAu = BigInt("1990")
		const addressOkjyMHM = await YieldFarmLP2xZGBVp2.initialize.call(addressAgLmadm, addressgV6nA2I, addressILlJK1, addressLcJGf4F, {from: accounts[4]});
		const uintCInWyDl = await YieldFarmLP2xZGBVp2.claimable.call(addresse74tCJU, {from: accounts[0]});
		const uintyiizkc2 = await YieldFarmLP2xZGBVp2.getPoolSize.call(uintcdRBtAu, {from: accounts[4]});
		const uintIlMUiqo = await YieldFarmLP2xZGBVp2.getCurrentEpoch.call({from: accounts[1]});

		await expect(YieldFarmLP2xZGBVp2.initialize.call(addressAgLmadm, addressgV6nA2I, addressILlJK1, addressLcJGf4F, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2JxqoexQ = await YieldFarmLP2.new({from: accounts[3]});
		const uintf865ku = BigInt("627")
		const uintOemaUmh = BigInt("1155")
		const uintvTmSz2E = await YieldFarmLP2JxqoexQ.userLastEpochIdHarvested.call({from: accounts[3]});
		const uintWper0bS = await YieldFarmLP2JxqoexQ.harvest.call(uintf865ku, {from: "0x0000000000000000000000000000000000000001"});
		const uintu2p804w = await YieldFarmLP2JxqoexQ.harvest.call(uintOemaUmh, {from: accounts[0]});
		const uintoZ9agi8 = await YieldFarmLP2JxqoexQ.getCurrentEpoch.call({from: accounts[2]});
		const uintV0DZM52 = await YieldFarmLP2JxqoexQ.getCurrentEpoch.call({from: accounts[1]});

		assert.equal(uintvTmSz2E, BigInt("0"))
		await expect(YieldFarmLP2JxqoexQ.harvest.call(uintf865ku, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2dw05CA = await YieldFarmLP2.new({from: accounts[5]});
		const addressJFZiiOM = accounts[3]
		const addressGPYjUjn = accounts[4]
		const addressukew9Vz = accounts[0]
		const addressCBfq4io = accounts[4]
		const uintcvhwSzG = await YieldFarmLP2dw05CA.getCurrentEpoch.call({from: accounts[2]});
		const addresszyXk1i = await YieldFarmLP2dw05CA.initialize.call(addressCBfq4io, addressukew9Vz, addressGPYjUjn, addressJFZiiOM, {from: accounts[4]});

		await expect(YieldFarmLP2dw05CA.getCurrentEpoch.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2faLEsZN = await YieldFarmLP2.new({from: accounts[2]});
		const uintFmPEhd = BigInt("463")
		const uintG44G3zS = BigInt("1738")
		const uintgyZLvj = BigInt("1515")
		const uintTbWqtV7 = await YieldFarmLP2faLEsZN.getPoolSize.call(uintFmPEhd, {from: accounts[2]});
		const uintsw5u1Wz = await YieldFarmLP2faLEsZN.harvest.call(uintG44G3zS, {from: accounts[4]});
		const uintJlQWTK1 = await YieldFarmLP2faLEsZN.harvest.call(uintgyZLvj, {from: "0x0000000000000000000000000000000000000001"});

		await expect(YieldFarmLP2faLEsZN.getPoolSize.call(uintFmPEhd, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2faLEsZN = await YieldFarmLP2.new({from: accounts[2]});
		const uintgFSZ0DQ = BigInt("1515")
		const addressKXJczA = accounts[2]
		const uintCJntPPS = await YieldFarmLP2faLEsZN.massHarvest.call({from: accounts[5]});
		const uintIUUeBqx = await YieldFarmLP2faLEsZN.massHarvest.call({from: accounts[1]});
		const uintJlQWTK1 = await YieldFarmLP2faLEsZN.harvest.call(uintgFSZ0DQ, {from: "0x0000000000000000000000000000000000000001"});
		const uintN4EQie6 = await YieldFarmLP2faLEsZN.claimable.call(addressKXJczA, {from: accounts[4]});

		await expect(YieldFarmLP2faLEsZN.massHarvest.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2Myx8PwM = await YieldFarmLP2.new({from: "0x0000000000000000000000000000000000000001"});
		const addressEsrT4z6 = accounts[0]
		const uintur5zY8U = await YieldFarmLP2Myx8PwM.massHarvest.call({from: accounts[5]});
		const uintwLbKqVe = await YieldFarmLP2Myx8PwM.claimable.call(addressEsrT4z6, {from: accounts[3]});
		const uintnoPcGbq = await YieldFarmLP2Myx8PwM.getCurrentEpoch.call({from: accounts[2]});
		const uintT0ZJw4O = await YieldFarmLP2Myx8PwM.getCurrentEpoch.call({from: accounts[0]});
	});
})