const BancorV2_ZapIn_General_V1_1 = artifacts.require("BancorV2_ZapIn_General_V1_1");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BancorV2_ZapIn_General_V1_1', (accounts) => {
	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintcxAgcKt = BigInt("794")
		const BancorV2_ZapIn_General_V1_1StmNbf1 = await BancorV2_ZapIn_General_V1_1.new(uintcxAgcKt, {from: accounts[0]});
		await BancorV2_ZapIn_General_V1_1StmNbf1.onlyOwner.call({from: accounts[1]});
		const boolcM097dU = await BancorV2_ZapIn_General_V1_1StmNbf1.isOwner.call({from: accounts[4]});

		await expect(BancorV2_ZapIn_General_V1_1StmNbf1.onlyOwner.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintcH5GOK = BigInt("1487")
		const BancorV2_ZapIn_General_V1_1pfn3fVN = await BancorV2_ZapIn_General_V1_1.new(uintcH5GOK, {from: accounts[2]});
		const addressoLIGkkw = "0x0000000000000000000000000000000000000001"
		await BancorV2_ZapIn_General_V1_1pfn3fVN.toggleContractActive.call({from: accounts[4]});
		await BancorV2_ZapIn_General_V1_1pfn3fVN.toggleContractActive.call({from: accounts[2]});
		const addressfm2TEYR = await BancorV2_ZapIn_General_V1_1pfn3fVN.transferOwnership.call(addressoLIGkkw, {from: accounts[1]});
		await BancorV2_ZapIn_General_V1_1pfn3fVN.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(BancorV2_ZapIn_General_V1_1pfn3fVN.toggleContractActive.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintqwAyB2F = BigInt("33")
		const BancorV2_ZapIn_General_V1_1L4R9dsf = await BancorV2_ZapIn_General_V1_1.new(uintqwAyB2F, {from: "0x0000000000000000000000000000000000000001"});
		await BancorV2_ZapIn_General_V1_1L4R9dsf.toggleContractActive.call({from: accounts[1]});
		await BancorV2_ZapIn_General_V1_1L4R9dsf.nonReentrant.call({from: accounts[1]});
		await BancorV2_ZapIn_General_V1_1L4R9dsf.stopInEmergency.call({from: accounts[4]});
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintqb9neN9 = BigInt("1685")
		const BancorV2_ZapIn_General_V1_1fGpyUXp = await BancorV2_ZapIn_General_V1_1.new(uintqb9neN9, {from: accounts[4]});
		const byteErxALjW = "0x1d0a030e0c1a181c100e0d"
		const addressfYmg74 = accounts[1]
		const addressdgyuZX = accounts[4]
		const uintVa1nZv6 = BigInt("1843")
		const uintHHOJVmd = BigInt("790")
		const addresskKF6ARg = accounts[4]
		const addressw4tvapK = accounts[0]
		const addressJgI6fw = accounts[4]
		const addressE4DdUbx = accounts[4]
		const bytenAswxOb = "0x001c1a16"
		const addresswXNWEft = accounts[1]
		const addressWQ1c5vy = accounts[3]
		const uintAv6Q5pM = BigInt("673")
		const uintPQMzRcV = BigInt("33")
		const addressRhQl3ps = accounts[2]
		const addresstJU6cJ = accounts[3]
		const addressktPujko = accounts[0]
		const uint256pgXP5fo = await BancorV2_ZapIn_General_V1_1fGpyUXp.ZapInSingleSided.call(addressJgI6fw, addressw4tvapK, addresskKF6ARg, uintHHOJVmd, uintVa1nZv6, addressdgyuZX, addressfYmg74, byteErxALjW, {from: accounts[4]});
		const addressk6dmH38 = await BancorV2_ZapIn_General_V1_1fGpyUXp.toPayable.call(addressE4DdUbx, {from: accounts[0]});
		await BancorV2_ZapIn_General_V1_1fGpyUXp.toggleContractActive.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256NOC9xr6 = await BancorV2_ZapIn_General_V1_1fGpyUXp.ZapInSingleSided.call(addressktPujko, addresstJU6cJ, addressRhQl3ps, uintPQMzRcV, uintAv6Q5pM, addressWQ1c5vy, addresswXNWEft, bytenAswxOb, {from: accounts[4]});

		await expect(BancorV2_ZapIn_General_V1_1fGpyUXp.ZapInSingleSided.call(addressJgI6fw, addressw4tvapK, addresskKF6ARg, uintHHOJVmd, uintVa1nZv6, addressdgyuZX, addressfYmg74, byteErxALjW, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintPeze5wd = BigInt("294")
		const BancorV2_ZapIn_General_V1_1IBh5z9J = await BancorV2_ZapIn_General_V1_1.new(uintPeze5wd, {from: accounts[1]});
		const addresshF8gxDL = accounts[5]
		const byterh1vJx2 = "0x0b101915081e1f120d1c1a10010f03011d161016181b060e1c010d1b"
		const addressrrbuvGZ = accounts[2]
		const addressJHT43v = accounts[4]
		const uintzoyMUf = BigInt("1182")
		const uintB1fqoI6 = BigInt("1453")
		const addressoOYh6ee = accounts[0]
		const addressoRCu3F3 = accounts[5]
		const addressdxSdBsb = accounts[5]
		const addressYUBHnHh = await BancorV2_ZapIn_General_V1_1IBh5z9J.owner.call({from: accounts[4]});
		const addressPAso39Z = await BancorV2_ZapIn_General_V1_1IBh5z9J.transferOwnership.call(addresshF8gxDL, {from: accounts[3]});
		const uint256hNY2nJk = await BancorV2_ZapIn_General_V1_1IBh5z9J.ZapInSingleSided.call(addressdxSdBsb, addressoRCu3F3, addressoOYh6ee, uintB1fqoI6, uintzoyMUf, addressJHT43v, addressrrbuvGZ, byterh1vJx2, {from: accounts[3]});
		await BancorV2_ZapIn_General_V1_1IBh5z9J.stopInEmergency.call({from: accounts[5]});
		await BancorV2_ZapIn_General_V1_1IBh5z9J.nonReentrant.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(addressYUBHnHh, 0x2056eC550673F5d5a056dCD0EF56f7E0A2d9Ad90)
		await expect(BancorV2_ZapIn_General_V1_1IBh5z9J.transferOwnership.call(addresshF8gxDL, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintxNsGZe2 = BigInt("1685")
		const BancorV2_ZapIn_General_V1_1fGpyUXp = await BancorV2_ZapIn_General_V1_1.new(uintxNsGZe2, {from: accounts[4]});
		const addressTBZzJ5A = accounts[2]
		const byteTn8OPW4 = "0x1d0a030e0c1a181c100e0d"
		const addressTaCKZ9c = accounts[1]
		const addressgGNFAK7 = accounts[4]
		const uintgZTBXF5 = BigInt("1843")
		const uint9wNa4K = BigInt("790")
		const addressrLGuxwL = accounts[4]
		const addressLMez1V = accounts[0]
		const addressHhvm7mR = accounts[4]
		const byteHy1YawZ = "0x001c1a16"
		const addressez1zGDt = accounts[1]
		const addressKViWyT2 = accounts[3]
		const uintUefUOkF = BigInt("673")
		const uintIBPBndh = BigInt("33")
		const addressRZ6MzuA = accounts[2]
		const address7HxnRX = accounts[3]
		const addresspHZgwW3 = accounts[0]
		await BancorV2_ZapIn_General_V1_1fGpyUXp.renounceOwnership.call({from: accounts[4]});
		const addresszK9S2Iu = await BancorV2_ZapIn_General_V1_1fGpyUXp.transferOwnership.call(addressTBZzJ5A, {from: accounts[0]});
		const uint256pgXP5fo = await BancorV2_ZapIn_General_V1_1fGpyUXp.ZapInSingleSided.call(addressHhvm7mR, addressLMez1V, addressrLGuxwL, uint9wNa4K, uintgZTBXF5, addressgGNFAK7, addressTaCKZ9c, byteTn8OPW4, {from: accounts[4]});
		await BancorV2_ZapIn_General_V1_1fGpyUXp.stopInEmergency.call({from: accounts[4]});
		await BancorV2_ZapIn_General_V1_1fGpyUXp.toggleContractActive.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256NOC9xr6 = await BancorV2_ZapIn_General_V1_1fGpyUXp.ZapInSingleSided.call(addresspHZgwW3, address7HxnRX, addressRZ6MzuA, uintIBPBndh, uintUefUOkF, addressKViWyT2, addressez1zGDt, byteHy1YawZ, {from: accounts[4]});

		await expect(BancorV2_ZapIn_General_V1_1fGpyUXp.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintvPHPzr = BigInt("1685")
		const BancorV2_ZapIn_General_V1_1fGpyUXp = await BancorV2_ZapIn_General_V1_1.new(uintvPHPzr, {from: accounts[4]});
		const addressxnn4PAE = accounts[2]
		const bytepniebk7 = "0x1d0a030e0c1a181c100e0d"
		const addressBWaXQkz = accounts[1]
		const addressz2lSHuZ = accounts[4]
		const uintIKdvZAg = BigInt("1843")
		const uintVESX2Y = BigInt("790")
		const addressVl2dkOt = accounts[4]
		const addresstfGJuw6 = accounts[0]
		const addressdcP4Pxq = accounts[4]
		const addressueCSyrR = accounts[2]
		const addressRZ5ZgrQ = accounts[5]
		const addresszEk0ay = accounts[3]
		const byte3C8ndj = "0x001c1a16"
		const addressaSoPswA = accounts[1]
		const addressX3vMIfq = accounts[3]
		const uintch4vYG5 = BigInt("673")
		const uintslb5fiq = BigInt("33")
		const addressntVHhOB = accounts[2]
		const addressGZaJrzZ = accounts[3]
		const addressWPCd2Rt = accounts[0]
		const addressz07GnMH = await BancorV2_ZapIn_General_V1_1fGpyUXp.transferOwnership.call(addressxnn4PAE, {from: accounts[4]});
		const uint256pgXP5fo = await BancorV2_ZapIn_General_V1_1fGpyUXp.ZapInSingleSided.call(addressdcP4Pxq, addresstfGJuw6, addressVl2dkOt, uintVESX2Y, uintIKdvZAg, addressz2lSHuZ, addressBWaXQkz, bytepniebk7, {from: accounts[4]});
		const addressvQ9EfRa = await BancorV2_ZapIn_General_V1_1fGpyUXp.inCaseTokengetsStuck.call(addressueCSyrR, {from: accounts[0]});
		const addressk6dmH38 = await BancorV2_ZapIn_General_V1_1fGpyUXp.toPayable.call(addressRZ5ZgrQ, {from: accounts[0]});
		await BancorV2_ZapIn_General_V1_1fGpyUXp.stopInEmergency.call({from: accounts[5]});
		const addressii0WcTC = await BancorV2_ZapIn_General_V1_1fGpyUXp.transferOwnership.call(addresszEk0ay, {from: accounts[2]});
		const uint256NOC9xr6 = await BancorV2_ZapIn_General_V1_1fGpyUXp.ZapInSingleSided.call(addressWPCd2Rt, addressGZaJrzZ, addressntVHhOB, uintslb5fiq, uintch4vYG5, addressX3vMIfq, addressaSoPswA, byte3C8ndj, {from: accounts[4]});
		const boolueSD10C = await BancorV2_ZapIn_General_V1_1fGpyUXp.isOwner.call({from: accounts[2]});

		await expect(BancorV2_ZapIn_General_V1_1fGpyUXp.ZapInSingleSided.call(addressdcP4Pxq, addresstfGJuw6, addressVl2dkOt, uintVESX2Y, uintIKdvZAg, addressz2lSHuZ, addressBWaXQkz, bytepniebk7, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintIhXh5K8 = BigInt("794")
		const BancorV2_ZapIn_General_V1_1StmNbf1 = await BancorV2_ZapIn_General_V1_1.new(uintIhXh5K8, {from: accounts[0]});
		const boolmrR98no = await BancorV2_ZapIn_General_V1_1StmNbf1.isOwner.call({from: accounts[2]});
		await BancorV2_ZapIn_General_V1_1StmNbf1.toggleContractActive.call({from: accounts[0]});
		await BancorV2_ZapIn_General_V1_1StmNbf1.onlyOwner.call({from: accounts[1]});

		assert.equal(boolmrR98no, false)
		await expect(BancorV2_ZapIn_General_V1_1StmNbf1.toggleContractActive.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintEHdbyia = BigInt("794")
		const BancorV2_ZapIn_General_V1_1StmNbf1 = await BancorV2_ZapIn_General_V1_1.new(uintEHdbyia, {from: accounts[0]});
		const addresszb5XAcJ = accounts[0]
		const addresszRi8pdf = await BancorV2_ZapIn_General_V1_1StmNbf1.inCaseTokengetsStuck.call(addresszb5XAcJ, {from: accounts[0]});
		await BancorV2_ZapIn_General_V1_1StmNbf1.onlyOwner.call({from: accounts[1]});

		await expect(BancorV2_ZapIn_General_V1_1StmNbf1.inCaseTokengetsStuck.call(addresszb5XAcJ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})