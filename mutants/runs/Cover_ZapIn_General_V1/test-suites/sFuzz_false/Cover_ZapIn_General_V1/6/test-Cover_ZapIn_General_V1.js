const Cover_ZapIn_General_V1 = artifacts.require("Cover_ZapIn_General_V1");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Cover_ZapIn_General_V1', (accounts) => {
	it('test for Cover_ZapIn_General_V1', async () => {
		const uintz86tnAn = BigInt("199")
		const Cover_ZapIn_General_V1BMRHGXu = await Cover_ZapIn_General_V1.new(uintz86tnAn, {from: accounts[1]});
		const byteUAcAmxW = "0x111d141c0c18091f0b111f"
		const addressoU4hrB = accounts[0]
		const addressX263Tra = accounts[1]
		const uintA4VZQlA = BigInt("202")
		const addressEm4akO1 = accounts[4]
		const addressc3SBEqq = accounts[4]
		const addressjPYL9bc = accounts[4]
		const addressB6raUWf = accounts[3]
		const uintsoLrjUr = BigInt("1946")
		const addressWW0b07J = accounts[1]
		const addressLgGpVhp = accounts[1]
		await Cover_ZapIn_General_V1BMRHGXu.onlyOwner.call({from: accounts[2]});
		await Cover_ZapIn_General_V1BMRHGXu.withdraw.call({from: accounts[2]});
		const 
L59D8zC = await Cover_ZapIn_General_V1BMRHGXu.ZapIn.call(addressB6raUWf, addressjPYL9bc, addressc3SBEqq, addressEm4akO1, uintA4VZQlA, addressX263Tra, addressoU4hrB, byteUAcAmxW, {from: accounts[2]});
		await Cover_ZapIn_General_V1BMRHGXu._enterCover.call(addressWW0b07J, uintsoLrjUr, {from: accounts[2]});
		const addressE88Ydg3 = await Cover_ZapIn_General_V1BMRHGXu.transferOwnership.call(addressLgGpVhp, {from: accounts[0]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintz2xK9QC = BigInt("691")
		const Cover_ZapIn_General_V1WloxTh = await Cover_ZapIn_General_V1.new(uintz2xK9QC, {from: "0x0000000000000000000000000000000000000001"});
		const addressSIDO0iI = accounts[4]
		const addressGHecJtN = accounts[0]
		const uintiUYXoGA = BigInt("368")
		const addressuzhiNz = accounts[5]
		const uintNfkNdM = BigInt("673")
		const addressBqsA3KW = accounts[5]
		const addressgtYaQAw = await Cover_ZapIn_General_V1WloxTh.owner.call({from: accounts[5]});
		await Cover_ZapIn_General_V1WloxTh.renounceOwnership.call({from: accounts[3]});
		await Cover_ZapIn_General_V1WloxTh.withdraw.call({from: accounts[0]});
		const 
tgBloqg = await Cover_ZapIn_General_V1WloxTh._enterPosition.call(addressuzhiNz, uintiUYXoGA, addressGHecJtN, addressSIDO0iI, {from: accounts[4]});
		await Cover_ZapIn_General_V1WloxTh.nonReentrant.call({from: accounts[4]});
		await Cover_ZapIn_General_V1WloxTh._enterCover.call(addressBqsA3KW, uintNfkNdM, {from: accounts[0]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintwLASMzp = BigInt("1504")
		const Cover_ZapIn_General_V1VNvJyBF = await Cover_ZapIn_General_V1.new(uintwLASMzp, {from: accounts[5]});
		const addresstmDqNyo = accounts[0]
		const addressnxBsi7B = accounts[2]
		const addressu19Bfev = accounts[5]
		const uintxWQphvo = BigInt("1758")
		const addressSG6a4aw = accounts[3]
		const addressyYZhhqj = await Cover_ZapIn_General_V1VNvJyBF.inCaseTokengetsStuck.call(addresstmDqNyo, {from: accounts[4]});
		await Cover_ZapIn_General_V1VNvJyBF.nonReentrant.call({from: "0x0000000000000000000000000000000000000001"});
		await Cover_ZapIn_General_V1VNvJyBF.renounceOwnership.call({from: accounts[2]});
		const 
qGg1b7P = await Cover_ZapIn_General_V1VNvJyBF._enterPosition.call(addressSG6a4aw, uintxWQphvo, addressu19Bfev, addressnxBsi7B, {from: accounts[4]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintKdkEsU = BigInt("909")
		const Cover_ZapIn_General_V1lQylgyf = await Cover_ZapIn_General_V1.new(uintKdkEsU, {from: accounts[2]});
		const byteCwDXv2l = "0x021c0c03140716110a1d05"
		const addressrmxe0m = accounts[1]
		const addressRgb4i6L = "0x0000000000000000000000000000000000000001"
		const uintEv1QraD = BigInt("274")
		const addressJZKN6bD = accounts[5]
		const addresszrE23TD = "0x0000000000000000000000000000000000000001"
		const addressBJynSzy = accounts[1]
		const addressIupx9zV = accounts[2]
		const uintO1Y0ZSx = BigInt("631")
		const addressDU6kGen = accounts[1]
		const uintidbKGYT = BigInt("1576")
		const 
YEs8Z0O = await Cover_ZapIn_General_V1lQylgyf.ZapIn.call(addressIupx9zV, addressBJynSzy, addresszrE23TD, addressJZKN6bD, uintEv1QraD, addressRgb4i6L, addressrmxe0m, byteCwDXv2l, {from: accounts[1]});
		await Cover_ZapIn_General_V1lQylgyf.nonReentrant.call({from: accounts[1]});
		await Cover_ZapIn_General_V1lQylgyf._enterCover.call(addressDU6kGen, uintO1Y0ZSx, {from: accounts[0]});
		const uint16IPUujxt = await Cover_ZapIn_General_V1lQylgyf.set_new_goodwill.call(uintidbKGYT, {from: accounts[0]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintBs2Xtyt = BigInt("297")
		const Cover_ZapIn_General_V1ZOzIh8k = await Cover_ZapIn_General_V1.new(uintBs2Xtyt, {from: accounts[3]});
		const addressgnjUQIj = accounts[1]
		const addressv7nF9U = accounts[0]
		const uintd0e4gRB = BigInt("852")
		const addressaaYYHQf = "0x0000000000000000000000000000000000000001"
		const addressLP0Uws = accounts[5]
		const addressvkaqM3o = accounts[4]
		const addressRVFQgBD = await Cover_ZapIn_General_V1ZOzIh8k.owner.call({from: accounts[2]});
		const 
EB6N4VT = await Cover_ZapIn_General_V1ZOzIh8k._enterPosition.call(addressaaYYHQf, uintd0e4gRB, addressv7nF9U, addressgnjUQIj, {from: "0x0000000000000000000000000000000000000001"});
		const addressabrF0fB = await Cover_ZapIn_General_V1ZOzIh8k.inCaseTokengetsStuck.call(addressLP0Uws, {from: "0x0000000000000000000000000000000000000001"});
		const 
H5mIkGO = await Cover_ZapIn_General_V1ZOzIh8k._getCoverDetails.call(addressvkaqM3o, {from: accounts[1]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintnb6nq63 = BigInt("1499")
		const Cover_ZapIn_General_V1UISDy4W = await Cover_ZapIn_General_V1.new(uintnb6nq63, {from: accounts[0]});
		await Cover_ZapIn_General_V1UISDy4W.renounceOwnership.call({from: accounts[0]});
		await Cover_ZapIn_General_V1UISDy4W.onlyOwner.call({from: accounts[0]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uinttQSnCm4 = BigInt("297")
		const Cover_ZapIn_General_V1ZOzIh8k = await Cover_ZapIn_General_V1.new(uinttQSnCm4, {from: accounts[3]});
		const addressNis8X5z = accounts[0]
		const addressIJISCV4 = accounts[1]
		const addressLnVGR4K = accounts[0]
		const uintyceY4uh = BigInt("1950")
		const addressmhIz3kS = "0x0000000000000000000000000000000000000001"
		const addressg1QbqI = await Cover_ZapIn_General_V1ZOzIh8k.inCaseTokengetsStuck.call(addressNis8X5z, {from: accounts[3]});
		const 
EB6N4VT = await Cover_ZapIn_General_V1ZOzIh8k._enterPosition.call(addressmhIz3kS, uintyceY4uh, addressLnVGR4K, addressIJISCV4, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintewV0AF2 = BigInt("297")
		const Cover_ZapIn_General_V1ZOzIh8k = await Cover_ZapIn_General_V1.new(uintewV0AF2, {from: accounts[3]});
		const addressvrpBIF = accounts[1]
		const addressWOVa7tm = accounts[0]
		const uintU87zA3m = BigInt("1987")
		const addressiOZDSsb = "0x0000000000000000000000000000000000000001"
		const bytesfe4nsp = "0x0e01181002051b081c1b1a061a0c"
		const addressgF9dTV = accounts[3]
		const addressPJMy4Q8 = accounts[4]
		const uintRCALw9l = BigInt("1225")
		const addressQ4mn5qq = accounts[1]
		const addressx1RGXO = accounts[0]
		const addressLjhYld = accounts[2]
		const addressvmfepm1 = accounts[0]
		await Cover_ZapIn_General_V1ZOzIh8k.toggleContractActive.call({from: accounts[3]});
		const 
EB6N4VT = await Cover_ZapIn_General_V1ZOzIh8k._enterPosition.call(addressiOZDSsb, uintU87zA3m, addressWOVa7tm, addressvrpBIF, {from: "0x0000000000000000000000000000000000000001"});
		const 
HDPPlZS = await Cover_ZapIn_General_V1ZOzIh8k.ZapIn.call(addressvmfepm1, addressLjhYld, addressx1RGXO, addressQ4mn5qq, uintRCALw9l, addressPJMy4Q8, addressgF9dTV, bytesfe4nsp, {from: accounts[0]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintPZVZsSC = BigInt("297")
		const Cover_ZapIn_General_V1ZOzIh8k = await Cover_ZapIn_General_V1.new(uintPZVZsSC, {from: accounts[3]});
		const addressBUftrK2 = accounts[1]
		const addressHfSofNK = accounts[0]
		const uintzp3918q = BigInt("1985")
		const addressC4lFMhh = "0x0000000000000000000000000000000000000001"
		await Cover_ZapIn_General_V1ZOzIh8k.withdraw.call({from: accounts[3]});
		const 
EB6N4VT = await Cover_ZapIn_General_V1ZOzIh8k._enterPosition.call(addressC4lFMhh, uintzp3918q, addressHfSofNK, addressBUftrK2, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintIpt4vVI = BigInt("297")
		const Cover_ZapIn_General_V1ZOzIh8k = await Cover_ZapIn_General_V1.new(uintIpt4vVI, {from: accounts[3]});
		const byteFA1BRzk = "0x1611120e0607151604030510071c"
		const addressPAEepq4 = accounts[4]
		const addressQlt2SVO = accounts[1]
		const uintPLGrVDc = BigInt("547")
		const addressA0PKZRC = accounts[3]
		const addressmwgLMbQ = accounts[1]
		const addressP334qNZ = "0x0000000000000000000000000000000000000001"
		const addressRpkyxyU = "0x0000000000000000000000000000000000000000"
		const addressfihmbv2 = accounts[0]
		const 
i1ruc4l = await Cover_ZapIn_General_V1ZOzIh8k.ZapIn.call(addressRpkyxyU, addressP334qNZ, addressmwgLMbQ, addressA0PKZRC, uintPLGrVDc, addressQlt2SVO, addressPAEepq4, byteFA1BRzk, {from: accounts[4]});
		const boolYhqEvWc = await Cover_ZapIn_General_V1ZOzIh8k.isOwner.call({from: accounts[4]});
		const addressXm9Bs5V = await Cover_ZapIn_General_V1ZOzIh8k.inCaseTokengetsStuck.call(addressfihmbv2, {from: accounts[1]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintq8qNgDk = BigInt("297")
		const Cover_ZapIn_General_V1ZOzIh8k = await Cover_ZapIn_General_V1.new(uintq8qNgDk, {from: accounts[3]});
		const addressDOq7fnT = accounts[5]
		const addressSQ0W1aY = accounts[1]
		const addressBa4gD40 = accounts[0]
		const uintpna5yB9 = BigInt("1985")
		const addressH0HLVBR = "0x0000000000000000000000000000000000000001"
		const addressIP3gkN3 = await Cover_ZapIn_General_V1ZOzIh8k.transferOwnership.call(addressDOq7fnT, {from: accounts[3]});
		const 
EB6N4VT = await Cover_ZapIn_General_V1ZOzIh8k._enterPosition.call(addressH0HLVBR, uintpna5yB9, addressBa4gD40, addressSQ0W1aY, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintCEsm5ta = BigInt("297")
		const Cover_ZapIn_General_V1ZOzIh8k = await Cover_ZapIn_General_V1.new(uintCEsm5ta, {from: accounts[3]});
		const uintYQbd5gE = BigInt("178")
		const addressc4AAQyy = accounts[1]
		const addressLwTf2V5 = accounts[1]
		const uintz5ijjOZ = BigInt("1985")
		const addressjDCbvUK = "0x0000000000000000000000000000000000000001"
		const uint16MGdAIuR = await Cover_ZapIn_General_V1ZOzIh8k.set_new_goodwill.call(uintYQbd5gE, {from: accounts[3]});
		const 
EB6N4VT = await Cover_ZapIn_General_V1ZOzIh8k._enterPosition.call(addressjDCbvUK, uintz5ijjOZ, addressLwTf2V5, addressc4AAQyy, {from: "0x0000000000000000000000000000000000000001"});
	});
})