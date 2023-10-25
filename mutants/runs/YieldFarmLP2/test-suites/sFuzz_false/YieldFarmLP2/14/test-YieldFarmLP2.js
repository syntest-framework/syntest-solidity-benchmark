const YieldFarmLP2 = artifacts.require("YieldFarmLP2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('YieldFarmLP2', (accounts) => {
	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2Jvw3kN1 = await YieldFarmLP2.new({from: "0x0000000000000000000000000000000000000001"});
		const uintyzi04Rf = BigInt("1960")
		const addressSijKmY = accounts[1]
		const addresslCmCEU4 = accounts[1]
		const addresseBuWnNf = accounts[5]
		const addressQoqu5xa = accounts[5]
		const addressrzOPsOy = accounts[4]
		const uintLdw47qb = await YieldFarmLP2Jvw3kN1.userLastEpochIdHarvested.call({from: accounts[4]});
		const uintepv6AIM = await YieldFarmLP2Jvw3kN1.getPoolSize.call(uintyzi04Rf, {from: accounts[1]});
		const uintdrwUgcx = await YieldFarmLP2Jvw3kN1.massHarvest.call({from: accounts[5]});
		const uintM3efGx0 = await YieldFarmLP2Jvw3kN1.getCurrentEpoch.call({from: accounts[1]});
		const addressCAeYJbQ = await YieldFarmLP2Jvw3kN1.initialize.call(addressQoqu5xa, addresseBuWnNf, addresslCmCEU4, addressSijKmY, {from: accounts[2]});
		const uintEN5J3ca = await YieldFarmLP2Jvw3kN1.claimable.call(addressrzOPsOy, {from: accounts[4]});
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2UB7zfbG = await YieldFarmLP2.new({from: accounts[0]});
		const addressmapHszp = accounts[2]
		const addressgtONS8D = accounts[0]
		const addressGx93UH = accounts[4]
		const addressj8ysrOX = accounts[0]
		const addressUodb0AA = accounts[1]
		const addressKdkIdDL = accounts[3]
		const addressjmXNrs7 = accounts[2]
		const addressATLnrvP = accounts[3]
		const addressi1u9Jgp = accounts[4]
		const addressgPMR2HW = accounts[0]
		const uintQqqE5pR = BigInt("333")
		const addresscqQ0OQm = await YieldFarmLP2UB7zfbG.initialize.call(addressj8ysrOX, addressGx93UH, addressgtONS8D, addressmapHszp, {from: accounts[3]});
		const addresszsk1EKS = await YieldFarmLP2UB7zfbG.initialize.call(addressATLnrvP, addressjmXNrs7, addressKdkIdDL, addressUodb0AA, {from: accounts[1]});
		const uintcDot4sm = await YieldFarmLP2UB7zfbG.claimable.call(addressi1u9Jgp, {from: accounts[2]});
		const uintMeowOtt = await YieldFarmLP2UB7zfbG.claimable.call(addressgPMR2HW, {from: accounts[1]});
		const uintPIbt63Q = await YieldFarmLP2UB7zfbG.harvest.call(uintQqqE5pR, {from: accounts[3]});

		await expect(YieldFarmLP2UB7zfbG.initialize.call(addressj8ysrOX, addressGx93UH, addressgtONS8D, addressmapHszp, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2y4veFwt = await YieldFarmLP2.new({from: accounts[3]});
		const uintaPH9kd = BigInt("1237")
		const addressF7ZKX0S = accounts[1]
		const uintSfTCjcG = BigInt("1754")
		const address99Sz3u = accounts[4]
		const addressLqxyBB = "0x0000000000000000000000000000000000000001"
		const addressRrXo6CS = accounts[4]
		const addressVyApI0h = accounts[4]
		const addresso72Ojgh = "0x0000000000000000000000000000000000000001"
		const addressjdf1VmX = accounts[4]
		const addressw7WJ1su = accounts[4]
		const addressR4mC0Vt = accounts[0]
		const addressciEZT1 = accounts[4]
		const uintnrhnJ6n = BigInt("341")
		const uintqAF9Vgk = await YieldFarmLP2y4veFwt.getEpochStake.call(addressF7ZKX0S, uintaPH9kd, {from: accounts[5]});
		const uintIkJ4T6M = await YieldFarmLP2y4veFwt.getEpochStake.call(address99Sz3u, uintSfTCjcG, {from: accounts[2]});
		const addressjGDtAcr = await YieldFarmLP2y4veFwt.initialize.call(addresso72Ojgh, addressVyApI0h, addressRrXo6CS, addressLqxyBB, {from: accounts[5]});
		const uintIWoaUtP = await YieldFarmLP2y4veFwt.massHarvest.call({from: accounts[3]});
		const addressOGygMN2 = await YieldFarmLP2y4veFwt.initialize.call(addressciEZT1, addressR4mC0Vt, addressw7WJ1su, addressjdf1VmX, {from: accounts[2]});
		const uintR6IQ9Jv = await YieldFarmLP2y4veFwt.getPoolSize.call(uintnrhnJ6n, {from: accounts[3]});

		await expect(YieldFarmLP2y4veFwt.getEpochStake.call(addressF7ZKX0S, uintaPH9kd, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2vnjq4PL = await YieldFarmLP2.new({from: accounts[1]});
		const uintygLqhvu = BigInt("1535")
		const uintZwpP4MI = BigInt("140")
		const uintzQF9UiQ = BigInt("1174")
		const addressW5TBJF1 = accounts[0]
		const addressmZuGVrl = accounts[1]
		const addressu165bts = accounts[0]
		const addressSw8Ggl2 = accounts[4]
		const addressZj6hiel = accounts[2]
		const addressbBEqyLw = accounts[3]
		const uintu3rIGQ = await YieldFarmLP2vnjq4PL.harvest.call(uintygLqhvu, {from: "0x0000000000000000000000000000000000000001"});
		const uintn2JMUnQ = await YieldFarmLP2vnjq4PL.getPoolSize.call(uintZwpP4MI, {from: accounts[1]});
		const uintFox1iBz = await YieldFarmLP2vnjq4PL.getCurrentEpoch.call({from: accounts[2]});
		const uintIQQEKJ = await YieldFarmLP2vnjq4PL.getEpochStake.call(addressW5TBJF1, uintzQF9UiQ, {from: accounts[0]});
		const addressdlnJK05 = await YieldFarmLP2vnjq4PL.initialize.call(addressZj6hiel, addressSw8Ggl2, addressu165bts, addressmZuGVrl, {from: accounts[2]});
		const uintvWuqsg1 = await YieldFarmLP2vnjq4PL.claimable.call(addressbBEqyLw, {from: accounts[1]});

		await expect(YieldFarmLP2vnjq4PL.harvest.call(uintygLqhvu, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2JEX4P4d = await YieldFarmLP2.new({from: accounts[3]});
		const uints70gtyJ = BigInt("1617")
		const addressa10FLCN = accounts[2]
		const uintxxQayeS = await YieldFarmLP2JEX4P4d.getCurrentEpoch.call({from: accounts[2]});
		const uintQk4NHx0 = await YieldFarmLP2JEX4P4d.userLastEpochIdHarvested.call({from: "0x0000000000000000000000000000000000000001"});
		const uintsmD08kO = await YieldFarmLP2JEX4P4d.userLastEpochIdHarvested.call({from: accounts[5]});
		const uinto42iyOQ = await YieldFarmLP2JEX4P4d.getEpochStake.call(addressa10FLCN, uints70gtyJ, {from: accounts[0]});

		await expect(YieldFarmLP2JEX4P4d.getCurrentEpoch.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2tkK9oOr = await YieldFarmLP2.new({from: accounts[1]});
		const addressl1GPBTs = accounts[3]
		const uintf8mlX6U = BigInt("1616")
		const addressVhlYrqV = accounts[0]
		const uintAkmJtEU = BigInt("246")
		const addresshyrlR6m = accounts[5]
		const uintqQOYhxF = BigInt("55")
		const addressSFxeHr = accounts[3]
		const uinty09ByyQ = await YieldFarmLP2tkK9oOr.claimable.call(addressl1GPBTs, {from: accounts[2]});
		const uintWLSOiXP = await YieldFarmLP2tkK9oOr.massHarvest.call({from: accounts[4]});
		const uintVaDqtNT = await YieldFarmLP2tkK9oOr.getEpochStake.call(addressVhlYrqV, uintf8mlX6U, {from: accounts[1]});
		const uintEIBQ4U1 = await YieldFarmLP2tkK9oOr.getEpochStake.call(addresshyrlR6m, uintAkmJtEU, {from: accounts[4]});
		const uintfwmAjoc = await YieldFarmLP2tkK9oOr.getEpochStake.call(addressSFxeHr, uintqQOYhxF, {from: accounts[0]});

		await expect(YieldFarmLP2tkK9oOr.claimable.call(addressl1GPBTs, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2tkK9oOr = await YieldFarmLP2.new({from: accounts[1]});
		const uinthvgyYW0 = BigInt("1616")
		const addresso5Tvrw = accounts[0]
		const uintYK3yIpR = BigInt("246")
		const addressOsnwDG8 = accounts[5]
		const uinttSF5FlP = BigInt("33")
		const addresskEofV6C = accounts[3]
		const uintWLSOiXP = await YieldFarmLP2tkK9oOr.massHarvest.call({from: accounts[4]});
		const uintVaDqtNT = await YieldFarmLP2tkK9oOr.getEpochStake.call(addresso5Tvrw, uinthvgyYW0, {from: accounts[1]});
		const uintEIBQ4U1 = await YieldFarmLP2tkK9oOr.getEpochStake.call(addressOsnwDG8, uintYK3yIpR, {from: accounts[4]});
		const uintfwmAjoc = await YieldFarmLP2tkK9oOr.getEpochStake.call(addresskEofV6C, uinttSF5FlP, {from: accounts[0]});

		await expect(YieldFarmLP2tkK9oOr.massHarvest.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2TXZT11H = await YieldFarmLP2.new({from: accounts[4]});
		const uintL4Ganjo = await YieldFarmLP2TXZT11H.userLastEpochIdHarvested.call({from: accounts[5]});

		assert.equal(uintL4Ganjo, BigInt("0"))
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2TXZT11H = await YieldFarmLP2.new({from: accounts[4]});
		const uintmeXDIlt = BigInt("569")
		const uintzg4LipW = await YieldFarmLP2TXZT11H.getPoolSize.call(uintmeXDIlt, {from: accounts[1]});

		await expect(YieldFarmLP2TXZT11H.getPoolSize.call(uintmeXDIlt, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})