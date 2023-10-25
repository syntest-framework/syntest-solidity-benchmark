const Cover_ZapIn_General_V1 = artifacts.require("Cover_ZapIn_General_V1");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Cover_ZapIn_General_V1', (accounts) => {
	it('test for Cover_ZapIn_General_V1', async () => {
		const uintDLD9qza = BigInt("350")
		const Cover_ZapIn_General_V1tCQUmMR = await Cover_ZapIn_General_V1.new(uintDLD9qza, {from: accounts[1]});
		const uintDfLLSn9 = BigInt("1834")
		const addressg6Yts2n = accounts[1]
		const uintVy2Tli9 = BigInt("1280")
		const addressivgJt1d = accounts[1]
		const address9wERIS = accounts[3]
		const uintGEHO6y0 = BigInt("286")
		const addresse6cNuQ = accounts[0]
		await Cover_ZapIn_General_V1tCQUmMR.onlyOwner.call({from: accounts[2]});
		await Cover_ZapIn_General_V1tCQUmMR._enterCover.call(addressg6Yts2n, uintDfLLSn9, {from: accounts[4]});
		const uint16ScQjK8 = await Cover_ZapIn_General_V1tCQUmMR.set_new_goodwill.call(uintVy2Tli9, {from: accounts[4]});
		const 
IDRT91g = await Cover_ZapIn_General_V1tCQUmMR._enterPosition.call(addresse6cNuQ, uintGEHO6y0, address9wERIS, addressivgJt1d, {from: accounts[1]});
		const addressfCPA1Hc = await Cover_ZapIn_General_V1tCQUmMR.owner.call({from: accounts[4]});
		await Cover_ZapIn_General_V1tCQUmMR.renounceOwnership.call({from: accounts[0]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintUl4paeP = BigInt("454")
		const Cover_ZapIn_General_V1Q3d5OR = await Cover_ZapIn_General_V1.new(uintUl4paeP, {from: accounts[1]});
		const addressUEniTKu = accounts[1]
		const uintcMMTOjZ = BigInt("1869")
		const addressNkfq0CL = accounts[2]
		const address7Lrw1o = accounts[1]
		const uintNmu7oti = BigInt("227")
		const addressq4ztFlK = accounts[3]
		const addressyor4Kib = await Cover_ZapIn_General_V1Q3d5OR.inCaseTokengetsStuck.call(addressUEniTKu, {from: accounts[2]});
		const boolCPcU3eb = await Cover_ZapIn_General_V1Q3d5OR.isOwner.call({from: accounts[4]});
		const uint16HzBl2MV = await Cover_ZapIn_General_V1Q3d5OR.set_new_goodwill.call(uintcMMTOjZ, {from: accounts[1]});
		const 
R4HO1fs = await Cover_ZapIn_General_V1Q3d5OR._enterPosition.call(addressq4ztFlK, uintNmu7oti, address7Lrw1o, addressNkfq0CL, {from: accounts[2]});
		await Cover_ZapIn_General_V1Q3d5OR.onlyOwner.call({from: accounts[2]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintM0P6tE9 = BigInt("658")
		const Cover_ZapIn_General_V1QyRfPAb = await Cover_ZapIn_General_V1.new(uintM0P6tE9, {from: accounts[2]});
		const addressRkB2DSu = accounts[1]
		const uintRo6yhle = BigInt("1053")
		const addressHcwGFb2 = accounts[3]
		await Cover_ZapIn_General_V1QyRfPAb.toggleContractActive.call({from: accounts[2]});
		const addressHZucwj7 = await Cover_ZapIn_General_V1QyRfPAb.inCaseTokengetsStuck.call(addressRkB2DSu, {from: accounts[4]});
		const uint16LShXE29 = await Cover_ZapIn_General_V1QyRfPAb.set_new_goodwill.call(uintRo6yhle, {from: accounts[2]});
		const addressUlqfttP = await Cover_ZapIn_General_V1QyRfPAb.inCaseTokengetsStuck.call(addressHcwGFb2, {from: accounts[3]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintHPZZwr = BigInt("1052")
		const Cover_ZapIn_General_V1Gy6tOhJ = await Cover_ZapIn_General_V1.new(uintHPZZwr, {from: accounts[5]});
		const addressDBtFUik = await Cover_ZapIn_General_V1Gy6tOhJ.owner.call({from: accounts[3]});
		await Cover_ZapIn_General_V1Gy6tOhJ.stopInEmergency.call({from: accounts[5]});
		await Cover_ZapIn_General_V1Gy6tOhJ.nonReentrant.call({from: accounts[5]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintcUlgxpu = BigInt("1052")
		const Cover_ZapIn_General_V1Gy6tOhJ = await Cover_ZapIn_General_V1.new(uintcUlgxpu, {from: accounts[5]});
		const bytef9tpiEJ = "0x061f0716170c1112040b0f181c04061a110e0902020701090f"
		const addressCWpcvA = accounts[2]
		const addressfDigYb = accounts[3]
		const uintWRFhvHT = BigInt("2019")
		const addresswYdDyDe = accounts[4]
		const addresso1NUuHZ = accounts[1]
		const addressW4WBHta = accounts[5]
		const addressGyKH7Uw = accounts[2]
		const addressgEcGn9k = accounts[3]
		const 
XUH8jME = await Cover_ZapIn_General_V1Gy6tOhJ.ZapIn.call(addressGyKH7Uw, addressW4WBHta, addresso1NUuHZ, addresswYdDyDe, uintWRFhvHT, addressfDigYb, addressCWpcvA, bytef9tpiEJ, {from: accounts[1]});
		const addressDBtFUik = await Cover_ZapIn_General_V1Gy6tOhJ.owner.call({from: accounts[3]});
		await Cover_ZapIn_General_V1Gy6tOhJ.stopInEmergency.call({from: accounts[5]});
		await Cover_ZapIn_General_V1Gy6tOhJ.nonReentrant.call({from: accounts[5]});
		const addressteMX5ge = await Cover_ZapIn_General_V1Gy6tOhJ.transferOwnership.call(addressgEcGn9k, {from: accounts[2]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintyXIf6cL = BigInt("575")
		const Cover_ZapIn_General_V1fPMM3KM = await Cover_ZapIn_General_V1.new(uintyXIf6cL, {from: "0x0000000000000000000000000000000000000001"});
		const uintdPaMBcz = BigInt("731")
		await Cover_ZapIn_General_V1fPMM3KM.renounceOwnership.call({from: accounts[0]});
		await Cover_ZapIn_General_V1fPMM3KM.toggleContractActive.call({from: accounts[2]});
		const uint16cye3gmi = await Cover_ZapIn_General_V1fPMM3KM.set_new_goodwill.call(uintdPaMBcz, {from: accounts[4]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintX1WZ4c2 = BigInt("710")
		const Cover_ZapIn_General_V1NcIfOTQ = await Cover_ZapIn_General_V1.new(uintX1WZ4c2, {from: accounts[2]});
		const addressTnDYhf7 = accounts[3]
		await Cover_ZapIn_General_V1NcIfOTQ.withdraw.call({from: accounts[2]});
		const addressvmmx9E = await Cover_ZapIn_General_V1NcIfOTQ.toPayable.call(addressTnDYhf7, {from: accounts[1]});
		await Cover_ZapIn_General_V1NcIfOTQ.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintmSwTq06 = BigInt("960")
		const Cover_ZapIn_General_V1S014Rl1 = await Cover_ZapIn_General_V1.new(uintmSwTq06, {from: accounts[1]});
		const addressBBOHP1 = accounts[2]
		const uinthpRS9pQ = BigInt("1676")
		const addressdPn5DVu = await Cover_ZapIn_General_V1S014Rl1.transferOwnership.call(addressBBOHP1, {from: accounts[1]});
		const uint16dw1V0Dp = await Cover_ZapIn_General_V1S014Rl1.set_new_goodwill.call(uinthpRS9pQ, {from: accounts[0]});
		await Cover_ZapIn_General_V1S014Rl1.withdraw.call({from: "0x0000000000000000000000000000000000000001"});
		await Cover_ZapIn_General_V1S014Rl1.stopInEmergency.call({from: accounts[0]});
	});
})