const Cover_ZapIn_General_V1 = artifacts.require("Cover_ZapIn_General_V1");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Cover_ZapIn_General_V1', (accounts) => {
	it('test for Cover_ZapIn_General_V1', async () => {
		const uinttibzICP = BigInt("1619")
		const Cover_ZapIn_General_V1nu8l6YM = await Cover_ZapIn_General_V1.new(uinttibzICP, {from: accounts[4]});
		const uintwptgCBg = BigInt("1374")
		await Cover_ZapIn_General_V1nu8l6YM.stopInEmergency.call({from: accounts[1]});
		const uint16YdcI5dH = await Cover_ZapIn_General_V1nu8l6YM.set_new_goodwill.call(uintwptgCBg, {from: accounts[5]});
		await Cover_ZapIn_General_V1nu8l6YM.onlyOwner.call({from: accounts[2]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintTyF28Zt = BigInt("1077")
		const Cover_ZapIn_General_V1a1GQh3n = await Cover_ZapIn_General_V1.new(uintTyF28Zt, {from: accounts[4]});
		const uintqryxmq5 = BigInt("828")
		await Cover_ZapIn_General_V1a1GQh3n.renounceOwnership.call({from: accounts[1]});
		await Cover_ZapIn_General_V1a1GQh3n.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});
		const uint16IScXX32 = await Cover_ZapIn_General_V1a1GQh3n.set_new_goodwill.call(uintqryxmq5, {from: accounts[4]});
		await Cover_ZapIn_General_V1a1GQh3n.withdraw.call({from: accounts[1]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintCy88Mcp = BigInt("711")
		const Cover_ZapIn_General_V1PI1wBUF = await Cover_ZapIn_General_V1.new(uintCy88Mcp, {from: "0x0000000000000000000000000000000000000001"});
		const addressk7PT3KD = accounts[3]
		const addressVGW4FuC = await Cover_ZapIn_General_V1PI1wBUF.toPayable.call(addressk7PT3KD, {from: accounts[4]});
		await Cover_ZapIn_General_V1PI1wBUF.stopInEmergency.call({from: accounts[2]});
		const boolyxnaG7v = await Cover_ZapIn_General_V1PI1wBUF.isOwner.call({from: accounts[1]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintRpgIAA = BigInt("887")
		const Cover_ZapIn_General_V13JNtdz = await Cover_ZapIn_General_V1.new(uintRpgIAA, {from: accounts[2]});
		const addressaqaPpI = "0x0000000000000000000000000000000000000001"
		const addressVEmnVzn = accounts[1]
		const uintkEeQkxL = BigInt("957")
		const addressGZ372oE = accounts[0]
		const addressOpPCBEi = await Cover_ZapIn_General_V13JNtdz.owner.call({from: accounts[0]});
		const 
rVXweY2 = await Cover_ZapIn_General_V13JNtdz._enterPosition.call(addressGZ372oE, uintkEeQkxL, addressVEmnVzn, addressaqaPpI, {from: accounts[0]});
		const addressQZhz4vL = await Cover_ZapIn_General_V13JNtdz.owner.call({from: accounts[3]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintwBIAFyx = BigInt("1255")
		const Cover_ZapIn_General_V1dUPPImP = await Cover_ZapIn_General_V1.new(uintwBIAFyx, {from: accounts[4]});
		const byteMiKKsjN = "0x15100e180a140a041610191219061f1d09"
		const addressag3zzw = accounts[2]
		const addressnt8DMbq = accounts[3]
		const uinthZEubni = BigInt("1119")
		const addressiqqgWcc = accounts[5]
		const addressBqUJsRq = "0x0000000000000000000000000000000000000001"
		const addresskheJSCa = accounts[5]
		const addressMPrJsnq = accounts[4]
		const 
b2iUhIy = await Cover_ZapIn_General_V1dUPPImP.ZapIn.call(addressMPrJsnq, addresskheJSCa, addressBqUJsRq, addressiqqgWcc, uinthZEubni, addressnt8DMbq, addressag3zzw, byteMiKKsjN, {from: accounts[2]});
		await Cover_ZapIn_General_V1dUPPImP.renounceOwnership.call({from: accounts[4]});
		const boolUEGPAN = await Cover_ZapIn_General_V1dUPPImP.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
		await Cover_ZapIn_General_V1dUPPImP.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});
		await Cover_ZapIn_General_V1dUPPImP.stopInEmergency.call({from: accounts[3]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintcqqmQPO = BigInt("1859")
		const Cover_ZapIn_General_V1IytWBpD = await Cover_ZapIn_General_V1.new(uintcqqmQPO, {from: accounts[2]});
		const addresstKpH2ZH = accounts[0]
		const addressBKdxRcO = accounts[0]
		const uintRPU5JW = BigInt("889")
		const addressg1yZFx = accounts[4]
		const addresstTFyZ67 = await Cover_ZapIn_General_V1IytWBpD.inCaseTokengetsStuck.call(addresstKpH2ZH, {from: accounts[2]});
		await Cover_ZapIn_General_V1IytWBpD.toggleContractActive.call({from: "0x0000000000000000000000000000000000000001"});
		const boolEHW8bC3 = await Cover_ZapIn_General_V1IytWBpD.isOwner.call({from: accounts[0]});
		const addressHqSEHpI = await Cover_ZapIn_General_V1IytWBpD.transferOwnership.call(addressBKdxRcO, {from: accounts[2]});
		await Cover_ZapIn_General_V1IytWBpD._enterCover.call(addressg1yZFx, uintRPU5JW, {from: accounts[2]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uinthaSwKyr = BigInt("804")
		const Cover_ZapIn_General_V1gd93Oo = await Cover_ZapIn_General_V1.new(uinthaSwKyr, {from: accounts[2]});
		const addressS5cplQO = accounts[1]
		const bytezXnDK1f = "0x051d101e"
		const addressdzDfPuZ = accounts[0]
		const addressWZUQ8wL = accounts[1]
		const uintSjbtJsP = BigInt("1273")
		const addressdNg44k = accounts[4]
		const addresswyRcbUM = accounts[2]
		const addressRCLgzFo = accounts[1]
		const addressuvrISBh = "0x0000000000000000000000000000000000000001"
		const addressur2piN = accounts[4]
		const addressz9l5ihH = accounts[4]
		const uintuaZmSuP = BigInt("1354")
		const addressR4R8Nta = accounts[4]
		const addressgZPTCU = await Cover_ZapIn_General_V1gd93Oo.transferOwnership.call(addressS5cplQO, {from: accounts[2]});
		const addressJ9WFgs0 = await Cover_ZapIn_General_V1gd93Oo.owner.call({from: accounts[3]});
		const 
GrnLlGN = await Cover_ZapIn_General_V1gd93Oo.ZapIn.call(addressuvrISBh, addressRCLgzFo, addresswyRcbUM, addressdNg44k, uintSjbtJsP, addressWZUQ8wL, addressdzDfPuZ, bytezXnDK1f, {from: accounts[4]});
		const 
ioAPnfo = await Cover_ZapIn_General_V1gd93Oo._enterPosition.call(addressR4R8Nta, uintuaZmSuP, addressz9l5ihH, addressur2piN, {from: accounts[3]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintsSU3M8V = BigInt("804")
		const Cover_ZapIn_General_V1gd93Oo = await Cover_ZapIn_General_V1.new(uintsSU3M8V, {from: accounts[2]});
		const addressjeaLnLJ = accounts[2]
		const bytef7t4kn9 = "0x051d101e"
		const addressNpSjrDR = accounts[0]
		const addressmVfpKeC = accounts[1]
		const uintN4yDCjc = BigInt("1273")
		const addressmOiNH9d = accounts[4]
		const addressjdeIxaS = accounts[2]
		const addressBt95Oyx = accounts[1]
		const addressvsqRnsC = "0x0000000000000000000000000000000000000001"
		const addressHqNShn5 = accounts[4]
		const addresszg6lUHn = accounts[4]
		const uintpthoI6P = BigInt("1354")
		const addressvdA8KTr = accounts[4]
		const addressgZPTCU = await Cover_ZapIn_General_V1gd93Oo.transferOwnership.call(addressjeaLnLJ, {from: accounts[2]});
		const addressJ9WFgs0 = await Cover_ZapIn_General_V1gd93Oo.owner.call({from: accounts[3]});
		await Cover_ZapIn_General_V1gd93Oo.withdraw.call({from: accounts[2]});
		const 
GrnLlGN = await Cover_ZapIn_General_V1gd93Oo.ZapIn.call(addressvsqRnsC, addressBt95Oyx, addressjdeIxaS, addressmOiNH9d, uintN4yDCjc, addressmVfpKeC, addressNpSjrDR, bytef7t4kn9, {from: accounts[4]});
		const 
ioAPnfo = await Cover_ZapIn_General_V1gd93Oo._enterPosition.call(addressvdA8KTr, uintpthoI6P, addresszg6lUHn, addressHqNShn5, {from: accounts[3]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintZgTJrrV = BigInt("1859")
		const Cover_ZapIn_General_V1IytWBpD = await Cover_ZapIn_General_V1.new(uintZgTJrrV, {from: accounts[2]});
		const uintlKVOEQn = BigInt("1476")
		const uintJpWdyzD = BigInt("1077")
		const addressD3sVp17 = accounts[2]
		const addresse4qq0Nr = accounts[0]
		const address8FzktV = accounts[4]
		const uintfaagcR = BigInt("578")
		const addressHzdRdCx = accounts[1]
		const uintRxU9H5w = BigInt("917")
		const addressnKmEzlD = accounts[3]
		const uint16F25nw4 = await Cover_ZapIn_General_V1IytWBpD.set_new_goodwill.call(uintlKVOEQn, {from: accounts[2]});
		await Cover_ZapIn_General_V1IytWBpD._enterCover.call(addressD3sVp17, uintJpWdyzD, {from: accounts[1]});
		const 
xfrtjGt = await Cover_ZapIn_General_V1IytWBpD._enterPosition.call(addressHzdRdCx, uintfaagcR, address8FzktV, addresse4qq0Nr, {from: accounts[0]});
		await Cover_ZapIn_General_V1IytWBpD._enterCover.call(addressnKmEzlD, uintRxU9H5w, {from: accounts[2]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintaHymZOW = BigInt("804")
		const Cover_ZapIn_General_V1gd93Oo = await Cover_ZapIn_General_V1.new(uintaHymZOW, {from: accounts[2]});
		const byteevmauC = "0x051d101e"
		const addressrHgbnek = accounts[0]
		const addressngo1wOg = accounts[1]
		const uintwnHxvKp = BigInt("1273")
		const addresslH85Wj = accounts[4]
		const addressCdzeLhp = accounts[2]
		const addressXfKvSE4 = accounts[1]
		const addressjFFYbmu = "0x0000000000000000000000000000000000000000"
		const addressYPOaiOd = accounts[2]
		const bytedRIaQEG = "0x050d010f07171108070d18030d06"
		const address92Djng = accounts[2]
		const addresshZgYwop = accounts[3]
		const uintFjZV6VF = BigInt("113")
		const addressZjJKXdB = accounts[3]
		const addressLh52JRU = "0x0000000000000000000000000000000000000001"
		const addressyOvxhMc = accounts[5]
		const addressuz0vGtD = accounts[3]
		const 
GrnLlGN = await Cover_ZapIn_General_V1gd93Oo.ZapIn.call(addressjFFYbmu, addressXfKvSE4, addressCdzeLhp, addresslH85Wj, uintwnHxvKp, addressngo1wOg, addressrHgbnek, byteevmauC, {from: accounts[4]});
		const addressSf0mq8x = await Cover_ZapIn_General_V1gd93Oo.toPayable.call(addressYPOaiOd, {from: accounts[0]});
		const addressVRYtIem = await Cover_ZapIn_General_V1gd93Oo.owner.call({from: accounts[0]});
		const 
brD8oSo = await Cover_ZapIn_General_V1gd93Oo.ZapIn.call(addressuz0vGtD, addressyOvxhMc, addressLh52JRU, addressZjJKXdB, uintFjZV6VF, addresshZgYwop, address92Djng, bytedRIaQEG, {from: accounts[1]});
	});
})