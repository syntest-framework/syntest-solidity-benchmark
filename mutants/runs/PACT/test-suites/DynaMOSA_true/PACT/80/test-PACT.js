const PACT = artifacts.require("PACT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('PACT', (accounts) => {
	it('test for PACT', async () => {
		const PACTXX5wenr = await PACT.new({from: accounts[2]});
		const addressGNXHeNA = accounts[4]
		const addresssiCvcA = accounts[0]
		const boolywV7lqM = await PACTXX5wenr.setupRewards.call(addressGNXHeNA, {from: accounts[2]});
		const stringbsUg3a1 = await PACTXX5wenr.name.call({from: accounts[1]});
		const boolS87QDs3 = await PACTXX5wenr.setupReserve.call(addresssiCvcA, {from: accounts[4]});
		const stringdIcwzno = await PACTXX5wenr.name.call({from: accounts[3]});

		await expect(PACTXX5wenr.setupRewards.call(addressGNXHeNA, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTI6N7qU = await PACT.new({from: accounts[0]});
		const addressMLxH71G = "0x0000000000000000000000000000000000000001"
		const addressOnI8LlM = accounts[4]
		const addressWNOBDN3 = accounts[2]
		const addressOSlnNN = accounts[4]
		const addressv9z0wDa = accounts[2]
		const boolyHTUWxD = await PACTI6N7qU.setupReserve.call(addressMLxH71G, {from: accounts[3]});
		const boolUi0kS8E = await PACTI6N7qU.setupTeam.call(addressOnI8LlM, {from: accounts[4]});
		const boolfKohlJB = await PACTI6N7qU.setupTeam.call(addressWNOBDN3, {from: accounts[4]});
		const uintUm42JuL = await PACTI6N7qU.allowance.call(addressv9z0wDa, addressOSlnNN, {from: accounts[4]});

		await expect(PACTI6N7qU.setupReserve.call(addressMLxH71G, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTtPWSfYc = await PACT.new({from: accounts[1]});
		const addressuXB56gu = accounts[4]
		const addressdkkrLZz = accounts[1]
		const uintnf5OMU = BigInt("1741")
		const addressqbQI1Fe = accounts[4]
		const boolJeGHGLt = await PACTtPWSfYc.setupBasePool.call(addressuXB56gu, {from: accounts[1]});
		const uintyeSf9mt = await PACTtPWSfYc.balanceOf.call(addressdkkrLZz, {from: accounts[5]});
		const boolW5Hxts6 = await PACTtPWSfYc.approve.call(addressqbQI1Fe, uintnf5OMU, {from: accounts[2]});

		await expect(PACTtPWSfYc.setupBasePool.call(addressuXB56gu, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTezyw7wx = await PACT.new({from: accounts[1]});
		const addressEWLT4hI = accounts[2]
		const stringWr5FHCg = await PACTezyw7wx.symbol.call({from: accounts[2]});
		const string0GFwf0 = await PACTezyw7wx.name.call({from: accounts[2]});
		const boolvgnpjS = await PACTezyw7wx.setupTeam.call(addressEWLT4hI, {from: accounts[0]});
		const uint8K0VEnbV = await PACTezyw7wx.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		const stringO69RlvQ = await PACTezyw7wx.name.call({from: accounts[2]});

		assert.equal(string0GFwf0, "P2PB2B community token")
		assert.equal(stringWr5FHCg, "PACT")
		await expect(PACTezyw7wx.setupTeam.call(addressEWLT4hI, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTK7NahPu = await PACT.new({from: accounts[3]});
		const uintKIO6ZkS = BigInt("881")
		const addressWQVRYKW = accounts[0]
		const addressmG8XfGY = "0x0000000000000000000000000000000000000001"
		const stringKtnaLFV = await PACTK7NahPu.name.call({from: accounts[0]});
		const boolW9LecT = await PACTK7NahPu.approve.call(addressWQVRYKW, uintKIO6ZkS, {from: "0x0000000000000000000000000000000000000001"});
		const uintrTnTP5e = await PACTK7NahPu.balanceOf.call(addressmG8XfGY, {from: accounts[3]});

		assert.equal(boolW9LecT, true)
		assert.equal(stringKtnaLFV, "P2PB2B community token")
		assert.equal(uintrTnTP5e, BigInt("0"))
	});

	it('test for PACT', async () => {
		const PACTUMqJHSI = await PACT.new({from: accounts[1]});
		const addressulb23hm = accounts[4]
		const addressdROBKtE = accounts[4]
		const boolddpocLC = await PACTUMqJHSI.setupFarming.call(addressulb23hm, {from: accounts[0]});
		const boolOLA62jJ = await PACTUMqJHSI.setupReserve.call(addressdROBKtE, {from: accounts[4]});

		await expect(PACTUMqJHSI.setupFarming.call(addressulb23hm, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTUhTjKv = await PACT.new({from: accounts[4]});
		const addressw5RGC7r = accounts[4]
		const addressqgWjYJe = accounts[3]
		const uintjTnCvy0 = BigInt("687")
		const addressPZNkfNz = accounts[1]
		const stringI1iiJt0 = await PACTUhTjKv.symbol.call({from: accounts[0]});
		const uintr0BQnw = await PACTUhTjKv.allowance.call(addressqgWjYJe, addressw5RGC7r, {from: accounts[3]});
		const boolF17a4gY = await PACTUhTjKv.approve.call(addressPZNkfNz, uintjTnCvy0, {from: accounts[0]});

		assert.equal(boolF17a4gY, true)
		assert.equal(stringI1iiJt0, "PACT")
		assert.equal(uintr0BQnw, BigInt("0"))
	});

	it('test for PACT', async () => {
		const PACTQALbdV = await PACT.new({from: accounts[3]});
		const address41J1sf = accounts[1]
		const addresskGJO6z3 = accounts[2]
		const uintcLlEVxY = await PACTQALbdV.totalSupply.call({from: accounts[3]});
		const boolEaGejXw = await PACTQALbdV.setupReserve.call(address41J1sf, {from: accounts[2]});
		const uintbLx0hnq = await PACTQALbdV.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const stringDZug8Hn = await PACTQALbdV.name.call({from: accounts[5]});
		const boolDN3RiN0 = await PACTQALbdV.setupTeam.call(addresskGJO6z3, {from: accounts[4]});

		assert.equal(uintcLlEVxY, BigInt("1000000000000000000000000000"))
		await expect(PACTQALbdV.setupReserve.call(address41J1sf, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTezyw7wx = await PACT.new({from: accounts[1]});
		const uintTofv9O3 = BigInt("71")
		const addressFaT9ubB = accounts[1]
		const addresscKTWUV = accounts[3]
		const addressPEk0iUY = accounts[3]
		const stringWr5FHCg = await PACTezyw7wx.symbol.call({from: accounts[2]});
		const boolCil8U7j = await PACTezyw7wx.transferFrom.call(addresscKTWUV, addressFaT9ubB, uintTofv9O3, {from: "0x0000000000000000000000000000000000000001"});
		const string0GFwf0 = await PACTezyw7wx.name.call({from: accounts[2]});
		const boolvgnpjS = await PACTezyw7wx.setupTeam.call(addressPEk0iUY, {from: accounts[0]});
		const uint8K0VEnbV = await PACTezyw7wx.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		const stringO69RlvQ = await PACTezyw7wx.name.call({from: accounts[2]});

		assert.equal(stringWr5FHCg, "PACT")
		await expect(PACTezyw7wx.transferFrom.call(addresscKTWUV, addressFaT9ubB, uintTofv9O3, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTrCaMkuz = await PACT.new({from: "0x0000000000000000000000000000000000000001"});
		const uintCMiQQFA = BigInt("1209")
		const addresssMdR8Od = accounts[3]
		const uintNdvxIxu = BigInt("1473")
		const addressJiApFPT = accounts[5]
		const uintAabqYrd = await PACTrCaMkuz.totalSupply.call({from: accounts[1]});
		const booli636mRt = await PACTrCaMkuz.approve.call(addresssMdR8Od, uintCMiQQFA, {from: accounts[2]});
		const uintSPXMhkJ = await PACTrCaMkuz.totalSupply.call({from: accounts[2]});
		const boolfsNdl6K = await PACTrCaMkuz.transfer.call(addressJiApFPT, uintNdvxIxu, {from: accounts[1]});
	});

	it('test for PACT', async () => {
		const PACTUMqJHSI = await PACT.new({from: accounts[1]});
		const uintF5yl1F = BigInt("653")
		const addressWMyz7jr = accounts[0]
		const addressh9w4z83 = accounts[4]
		const booltoXmcg0 = await PACTUMqJHSI.transfer.call(addressWMyz7jr, uintF5yl1F, {from: accounts[2]});
		const boolddpocLC = await PACTUMqJHSI.setupFarming.call(addressh9w4z83, {from: accounts[0]});

		await expect(PACTUMqJHSI.transfer.call(addressWMyz7jr, uintF5yl1F, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTUMqJHSI = await PACT.new({from: accounts[1]});
		const addressgOdrD3h = accounts[5]
		const uint8g78xnbh = await PACTUMqJHSI.decimals.call({from: accounts[2]});
		const boolddpocLC = await PACTUMqJHSI.setupFarming.call(addressgOdrD3h, {from: accounts[0]});
		const uintzYSk4lK = await PACTUMqJHSI.totalSupply.call({from: accounts[3]});
		const uint8CFCdhWu = await PACTUMqJHSI.decimals.call({from: accounts[2]});

		assert.equal(uint8g78xnbh, BigInt("18"))
		await expect(PACTUMqJHSI.setupFarming.call(addressgOdrD3h, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTs9zjUMq = await PACT.new({from: accounts[4]});
		const uintyX3OU2c = BigInt("0")
		const addressf4ROjl5 = accounts[3]
		const addressy1N94WB = accounts[5]
		const addresss470cR = accounts[4]
		const addressRnvckVa = accounts[0]
		const boolKF5lkUL = await PACTs9zjUMq.transferFrom.call(addressy1N94WB, addressf4ROjl5, uintyX3OU2c, {from: accounts[1]});
		const uintDsxh5bt = await PACTs9zjUMq.balanceOf.call(addresss470cR, {from: accounts[1]});
		const boolMvMw3E0 = await PACTs9zjUMq.setupTeam.call(addressRnvckVa, {from: accounts[4]});
		const uintyCdX3Z2 = await PACTs9zjUMq.totalSupply.call({from: accounts[4]});

		assert.equal(boolKF5lkUL, true)
		assert.equal(uintDsxh5bt, BigInt("0"))
		await expect(PACTs9zjUMq.setupTeam.call(addressRnvckVa, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTtPWSfYc = await PACT.new({from: accounts[1]});
		const uintNkXyoti = BigInt("945")
		const addressryW4viY = accounts[1]
		const uintkPCRiu = BigInt("1461")
		const addressL3LFgeD = accounts[4]
		const addressDwEURL = accounts[5]
		const boolHDcftyJ = await PACTtPWSfYc.burn.call(addressryW4viY, uintNkXyoti, {from: accounts[3]});
		const boolU79NjX = await PACTtPWSfYc.approve.call(addressL3LFgeD, uintkPCRiu, {from: accounts[0]});
		const boolJeGHGLt = await PACTtPWSfYc.setupBasePool.call(addressDwEURL, {from: accounts[1]});

		await expect(PACTtPWSfYc.burn.call(addressryW4viY, uintNkXyoti, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})