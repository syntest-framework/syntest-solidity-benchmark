const Cover_ZapIn_General_V1 = artifacts.require("Cover_ZapIn_General_V1");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Cover_ZapIn_General_V1', (accounts) => {
	it('test for Cover_ZapIn_General_V1', async () => {
		const uintRxjyRlC = BigInt("1759")
		const Cover_ZapIn_General_V1l79IhUD = await Cover_ZapIn_General_V1.new(uintRxjyRlC, {from: accounts[5]});
		const uintMlXYuo5 = BigInt("1764")
		const uintW3pv6BH = BigInt("1495")
		const addressJIjj2V2 = accounts[5]
		const booloIVgFD2 = await Cover_ZapIn_General_V1l79IhUD.isOwner.call({from: accounts[2]});
		const uint16WY1RIEF = await Cover_ZapIn_General_V1l79IhUD.set_new_goodwill.call(uintMlXYuo5, {from: "0x0000000000000000000000000000000000000001"});
		await Cover_ZapIn_General_V1l79IhUD.toggleContractActive.call({from: accounts[3]});
		await Cover_ZapIn_General_V1l79IhUD.stopInEmergency.call({from: accounts[5]});
		const boolf3FgpBa = await Cover_ZapIn_General_V1l79IhUD.isOwner.call({from: accounts[4]});
		await Cover_ZapIn_General_V1l79IhUD._enterCover.call(addressJIjj2V2, uintW3pv6BH, {from: accounts[2]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintpxiumdS = BigInt("802")
		const Cover_ZapIn_General_V1GrwcIRJ = await Cover_ZapIn_General_V1.new(uintpxiumdS, {from: "0x0000000000000000000000000000000000000001"});
		const uintYafIq9W = BigInt("30")
		const addressL0uPftj = accounts[4]
		const boolaNW7DPh = await Cover_ZapIn_General_V1GrwcIRJ.isOwner.call({from: accounts[2]});
		const boolTx0WxFk = await Cover_ZapIn_General_V1GrwcIRJ.isOwner.call({from: accounts[3]});
		await Cover_ZapIn_General_V1GrwcIRJ._enterCover.call(addressL0uPftj, uintYafIq9W, {from: accounts[4]});
		await Cover_ZapIn_General_V1GrwcIRJ.renounceOwnership.call({from: accounts[3]});
		const boolPMEWaES = await Cover_ZapIn_General_V1GrwcIRJ.isOwner.call({from: accounts[0]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintCZbMPbN = BigInt("1202")
		const Cover_ZapIn_General_V1vJszAQY = await Cover_ZapIn_General_V1.new(uintCZbMPbN, {from: accounts[2]});
		const addressvlXM6Hv = await Cover_ZapIn_General_V1vJszAQY.owner.call({from: accounts[4]});
		await Cover_ZapIn_General_V1vJszAQY.renounceOwnership.call({from: accounts[2]});
		const booli9kkTdf = await Cover_ZapIn_General_V1vJszAQY.isOwner.call({from: accounts[2]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintgOIWzlH = BigInt("1304")
		const Cover_ZapIn_General_V1SLlsHli = await Cover_ZapIn_General_V1.new(uintgOIWzlH, {from: accounts[4]});
		const uintq5SQziz = BigInt("1580")
		const addressboaJfnZ = accounts[2]
		const addressSo1Byy = accounts[4]
		const addressgCi4kwg = "0x0000000000000000000000000000000000000001"
		const uintWIYOHkR = BigInt("1242")
		const addressvJ4V6o5 = accounts[0]
		const addressOOp7b7u = await Cover_ZapIn_General_V1SLlsHli.owner.call({from: accounts[1]});
		await Cover_ZapIn_General_V1SLlsHli.nonReentrant.call({from: accounts[2]});
		await Cover_ZapIn_General_V1SLlsHli.withdraw.call({from: accounts[0]});
		const uint16CjjX8w = await Cover_ZapIn_General_V1SLlsHli.set_new_goodwill.call(uintq5SQziz, {from: accounts[4]});
		const addressJV4Dkyd = await Cover_ZapIn_General_V1SLlsHli.toPayable.call(addressboaJfnZ, {from: accounts[1]});
		const 
cfJwhKM = await Cover_ZapIn_General_V1SLlsHli._enterPosition.call(addressvJ4V6o5, uintWIYOHkR, addressgCi4kwg, addressSo1Byy, {from: accounts[4]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintQkIsKP = BigInt("1202")
		const Cover_ZapIn_General_V1vJszAQY = await Cover_ZapIn_General_V1.new(uintQkIsKP, {from: accounts[2]});
		const addressKdRXpHv = accounts[3]
		const addressfgyRUEP = accounts[1]
		const addressYzhikBF = await Cover_ZapIn_General_V1vJszAQY.transferOwnership.call(addressKdRXpHv, {from: accounts[2]});
		const addressvlXM6Hv = await Cover_ZapIn_General_V1vJszAQY.owner.call({from: accounts[4]});
		const 
ybuj03z = await Cover_ZapIn_General_V1vJszAQY._getCoverDetails.call(addressfgyRUEP, {from: accounts[5]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintvkIvdkd = BigInt("1818")
		const Cover_ZapIn_General_V1jEKuSa = await Cover_ZapIn_General_V1.new(uintvkIvdkd, {from: accounts[5]});
		const bytePy9VZjw = "0x0712081e1503170e1a1b120112131e1214011c0216051706041e1f1414"
		const addressmzRkV8L = accounts[3]
		const addressONVWkBu = accounts[2]
		const uintcZ2UP5a = BigInt("1720")
		const addressgnvMF1 = "0x0000000000000000000000000000000000000001"
		const addressIWUjjf8 = accounts[3]
		const addressyxcYDet = accounts[1]
		const addressQ6VI9sO = accounts[2]
		const 
mZq3A4 = await Cover_ZapIn_General_V1jEKuSa.ZapIn.call(addressQ6VI9sO, addressyxcYDet, addressIWUjjf8, addressgnvMF1, uintcZ2UP5a, addressONVWkBu, addressmzRkV8L, bytePy9VZjw, {from: accounts[2]});
		const boolLTrdhMB = await Cover_ZapIn_General_V1jEKuSa.isOwner.call({from: accounts[4]});
		await Cover_ZapIn_General_V1jEKuSa.renounceOwnership.call({from: accounts[5]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintN5ACduA = BigInt("1202")
		const Cover_ZapIn_General_V1vJszAQY = await Cover_ZapIn_General_V1.new(uintN5ACduA, {from: accounts[2]});
		const uintNXvMO7M = BigInt("220")
		const booli9kkTdf = await Cover_ZapIn_General_V1vJszAQY.isOwner.call({from: accounts[2]});
		const uint16R9EupRP = await Cover_ZapIn_General_V1vJszAQY.set_new_goodwill.call(uintNXvMO7M, {from: accounts[2]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintBV21Ap = BigInt("1202")
		const Cover_ZapIn_General_V1vJszAQY = await Cover_ZapIn_General_V1.new(uintBV21Ap, {from: accounts[2]});
		const booli9kkTdf = await Cover_ZapIn_General_V1vJszAQY.isOwner.call({from: accounts[2]});
		await Cover_ZapIn_General_V1vJszAQY.toggleContractActive.call({from: accounts[2]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintM9Lm7ee = BigInt("1202")
		const Cover_ZapIn_General_V1vJszAQY = await Cover_ZapIn_General_V1.new(uintM9Lm7ee, {from: accounts[2]});
		const addressCkYaf7A = accounts[3]
		const uintKrLlAgN = BigInt("104")
		const addressvjN9Un5 = await Cover_ZapIn_General_V1vJszAQY.inCaseTokengetsStuck.call(addressCkYaf7A, {from: accounts[2]});
		const uint16uk1M7Um = await Cover_ZapIn_General_V1vJszAQY.set_new_goodwill.call(uintKrLlAgN, {from: "0x0000000000000000000000000000000000000001"});
		const booli9kkTdf = await Cover_ZapIn_General_V1vJszAQY.isOwner.call({from: accounts[2]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintMi2qZ3E = BigInt("1202")
		const Cover_ZapIn_General_V1vJszAQY = await Cover_ZapIn_General_V1.new(uintMi2qZ3E, {from: accounts[2]});
		const bytezS6Pno4 = "0x0218180f0210020710031a0705050b00051d11061d1e101810"
		const addressruPxAAu = accounts[3]
		const addressTxTCcKM = accounts[1]
		const uint1M7TKt = BigInt("305")
		const addressZ4CbzKb = accounts[2]
		const addressa0fUyXn = accounts[3]
		const addressWwudcvu = accounts[1]
		const addressk0kNVA4 = "0x0000000000000000000000000000000000000000"
		const 
QrWttj = await Cover_ZapIn_General_V1vJszAQY.ZapIn.call(addressk0kNVA4, addressWwudcvu, addressa0fUyXn, addressZ4CbzKb, uint1M7TKt, addressTxTCcKM, addressruPxAAu, bytezS6Pno4, {from: accounts[3]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uinttV5CAsB = BigInt("1202")
		const Cover_ZapIn_General_V1vJszAQY = await Cover_ZapIn_General_V1.new(uinttV5CAsB, {from: accounts[2]});
		const uintg37tSHU = BigInt("103")
		const booli9kkTdf = await Cover_ZapIn_General_V1vJszAQY.isOwner.call({from: accounts[2]});
		await Cover_ZapIn_General_V1vJszAQY.withdraw.call({from: accounts[2]});
		const uint16lXmZ2Vk = await Cover_ZapIn_General_V1vJszAQY.set_new_goodwill.call(uintg37tSHU, {from: accounts[1]});
	});
})