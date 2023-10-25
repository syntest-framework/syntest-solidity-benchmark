const Cover_ZapIn_General_V1 = artifacts.require("Cover_ZapIn_General_V1");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Cover_ZapIn_General_V1', (accounts) => {
	it('test for Cover_ZapIn_General_V1', async () => {
		const uintd6PdqhD = BigInt("42")
		const Cover_ZapIn_General_V1k851LrB = await Cover_ZapIn_General_V1.new(uintd6PdqhD, {from: accounts[1]});
		const addressOIJmvA6 = accounts[0]
		const addressmdTRaZK = accounts[0]
		const uintVJ8ceky = BigInt("1475")
		const addressXVrUKQa = accounts[4]
		const addressEW27ogb = accounts[4]
		const uintznYhvpN = BigInt("1363")
		const 
FEk5JoC = await Cover_ZapIn_General_V1k851LrB._enterPosition.call(addressXVrUKQa, uintVJ8ceky, addressmdTRaZK, addressOIJmvA6, {from: accounts[4]});
		const boolPvsPU9 = await Cover_ZapIn_General_V1k851LrB.isOwner.call({from: accounts[0]});
		const addressBAWajmW = await Cover_ZapIn_General_V1k851LrB.inCaseTokengetsStuck.call(addressEW27ogb, {from: accounts[2]});
		const uint16GDbtgwF = await Cover_ZapIn_General_V1k851LrB.set_new_goodwill.call(uintznYhvpN, {from: accounts[1]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintYY3ataU = BigInt("1595")
		const Cover_ZapIn_General_V1u70VH30 = await Cover_ZapIn_General_V1.new(uintYY3ataU, {from: accounts[4]});
		const addressrxwzP9M = accounts[2]
		const addressI6h5S2m = accounts[4]
		await Cover_ZapIn_General_V1u70VH30.renounceOwnership.call({from: accounts[0]});
		const 
tpEYBSr = await Cover_ZapIn_General_V1u70VH30._getCoverDetails.call(addressrxwzP9M, {from: accounts[5]});
		const address07orKR = await Cover_ZapIn_General_V1u70VH30.transferOwnership.call(addressI6h5S2m, {from: accounts[1]});
		await Cover_ZapIn_General_V1u70VH30.onlyOwner.call({from: accounts[5]});
		await Cover_ZapIn_General_V1u70VH30.toggleContractActive.call({from: accounts[1]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintFQlt28b = BigInt("394")
		const Cover_ZapIn_General_V11yTZq9 = await Cover_ZapIn_General_V1.new(uintFQlt28b, {from: accounts[0]});
		const addressa2dPcdd = accounts[1]
		const addressWfPS5Eq = accounts[0]
		const addressPSSDzjW = await Cover_ZapIn_General_V11yTZq9.transferOwnership.call(addressa2dPcdd, {from: accounts[0]});
		await Cover_ZapIn_General_V11yTZq9.withdraw.call({from: accounts[2]});
		const addresszewQSXX = await Cover_ZapIn_General_V11yTZq9.inCaseTokengetsStuck.call(addressWfPS5Eq, {from: accounts[2]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintabwM8S7 = BigInt("1864")
		const Cover_ZapIn_General_V1rR6OX27 = await Cover_ZapIn_General_V1.new(uintabwM8S7, {from: accounts[4]});
		const addressxPSrsy = accounts[0]
		const addressxNt7koK = accounts[2]
		await Cover_ZapIn_General_V1rR6OX27.renounceOwnership.call({from: accounts[4]});
		const addressbkXy6TA = await Cover_ZapIn_General_V1rR6OX27.inCaseTokengetsStuck.call(addressxPSrsy, {from: accounts[5]});
		const 
vRTnRsJ = await Cover_ZapIn_General_V1rR6OX27._getCoverDetails.call(addressxNt7koK, {from: accounts[3]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintFgcDTe = BigInt("651")
		const Cover_ZapIn_General_V1su6r1I = await Cover_ZapIn_General_V1.new(uintFgcDTe, {from: accounts[0]});
		const byteXEeWLi = "0x19150b05161d1a0f1705061b101411100e0c0709020f0c191f00041205"
		const addressjxu6o2V = accounts[3]
		const addressDT5G6tb = accounts[2]
		const uintrzWf28d = BigInt("36")
		const addressTahe70e = accounts[4]
		const addressDF30FwP = "0x0000000000000000000000000000000000000001"
		const addressKwfSC93 = accounts[4]
		const addressIk4k0Fb = accounts[2]
		const uintZVlJ25 = BigInt("689")
		const addressmBOlwAr = accounts[4]
		const 
r8JaQ4a = await Cover_ZapIn_General_V1su6r1I.ZapIn.call(addressIk4k0Fb, addressKwfSC93, addressDF30FwP, addressTahe70e, uintrzWf28d, addressDT5G6tb, addressjxu6o2V, byteXEeWLi, {from: accounts[3]});
		const uint16Kj9eQty = await Cover_ZapIn_General_V1su6r1I.set_new_goodwill.call(uintZVlJ25, {from: accounts[1]});
		const addressH7fn2np = await Cover_ZapIn_General_V1su6r1I.transferOwnership.call(addressmBOlwAr, {from: accounts[3]});
		await Cover_ZapIn_General_V1su6r1I.withdraw.call({from: accounts[1]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintWRoZN3c = BigInt("651")
		const Cover_ZapIn_General_V1su6r1I = await Cover_ZapIn_General_V1.new(uintWRoZN3c, {from: accounts[0]});
		const byteVaVI5v = "0x19150b05161d1a0f1705061b101411100e0c0709020f0c191f00041205"
		const addressV3DmcKq = accounts[3]
		const addressGpUW3hc = accounts[2]
		const uintLuM2XUJ = BigInt("36")
		const addresslOE1Onz = accounts[4]
		const addressfVoQll = "0x0000000000000000000000000000000000000001"
		const addressxQ0LoFY = accounts[4]
		const addressub94REw = accounts[2]
		const addresswEJl4VL = accounts[5]
		const addressYoqwG0 = await Cover_ZapIn_General_V1su6r1I.owner.call({from: accounts[1]});
		const 
r8JaQ4a = await Cover_ZapIn_General_V1su6r1I.ZapIn.call(addressub94REw, addressxQ0LoFY, addressfVoQll, addresslOE1Onz, uintLuM2XUJ, addressGpUW3hc, addressV3DmcKq, byteVaVI5v, {from: accounts[3]});
		const addressH7fn2np = await Cover_ZapIn_General_V1su6r1I.transferOwnership.call(addresswEJl4VL, {from: accounts[3]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uinttzyVpMn = BigInt("1864")
		const Cover_ZapIn_General_V1rR6OX27 = await Cover_ZapIn_General_V1.new(uinttzyVpMn, {from: accounts[4]});
		const uintvB8CBQC = BigInt("748")
		const addressfEqfRTR = accounts[2]
		const addressO4K4snp = accounts[2]
		const uint16mTRFa01 = await Cover_ZapIn_General_V1rR6OX27.set_new_goodwill.call(uintvB8CBQC, {from: accounts[4]});
		const 
vRTnRsJ = await Cover_ZapIn_General_V1rR6OX27._getCoverDetails.call(addressfEqfRTR, {from: accounts[3]});
		const 
TX3sawo = await Cover_ZapIn_General_V1rR6OX27._getCoverDetails.call(addressO4K4snp, {from: accounts[4]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintmdiAcYC = BigInt("1864")
		const Cover_ZapIn_General_V1rR6OX27 = await Cover_ZapIn_General_V1.new(uintmdiAcYC, {from: accounts[4]});
		const addresse8lqLRW = accounts[2]
		await Cover_ZapIn_General_V1rR6OX27.toggleContractActive.call({from: accounts[4]});
		const 
vRTnRsJ = await Cover_ZapIn_General_V1rR6OX27._getCoverDetails.call(addresse8lqLRW, {from: accounts[3]});
		await Cover_ZapIn_General_V1rR6OX27.toggleContractActive.call({from: accounts[0]});
	});
})