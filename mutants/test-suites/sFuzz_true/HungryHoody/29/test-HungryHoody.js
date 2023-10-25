const HungryHoody = artifacts.require("HungryHoody");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('HungryHoody', (accounts) => {
	it('test for HungryHoody', async () => {
		const HungryHoodyz86tnAn = await HungryHoody.new({from: accounts[0]});
		const addressuVZQlAG = accounts[0]
		const addressEm4akO1 = accounts[4]
		const addressB6raUWf = accounts[3]
		const addresseLrjUr6 = accounts[4]
		const addressWW0b07J = accounts[1]
		const uintNVgGpVh = BigInt("1379")
		const uintTiAefTr = BigInt("857")
		const uintJh263Tr = await HungryHoodyz86tnAn.allowance.call(addressEm4akO1, addressuVZQlAG, {from: accounts[2]});
		const uintmtPYL9b = await HungryHoodyz86tnAn.balanceOf.call(addressB6raUWf, {from: accounts[2]});
		const uinteIMmmP = await HungryHoodyz86tnAn.allowance.call(addressWW0b07J, addresseLrjUr6, {from: accounts[2]});
//		const uintE88Ydg3 = await HungryHoodyz86tnAn.safeSub.call(uintTiAefTr, uintNVgGpVh, {from: accounts[0]});

		assert.equal(uintJh263Tr, BigInt("0"))
		assert.equal(uinteIMmmP, BigInt("0"))
		assert.equal(uintmtPYL9b, BigInt("0"))
		await expect(HungryHoodyz86tnAn.safeSub.call(uintTiAefTr, uintNVgGpVh, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for HungryHoody', async () => {
		const HungryHoodypIh8ko8 = await HungryHoody.new({from: accounts[1]});
		const addressDvWRry = accounts[2]
		const addressWBI47MZ = accounts[2]
		const uintqlwQP9 = BigInt("1716")
		const uintq9cdGE = BigInt("1766")
		const uintijIG42G = BigInt("1307")
		const addresspiEEdI = accounts[3]
		const addressh4BaQRM = accounts[2]
		const addresstebY5aB = accounts[4]
		const uintmlwpnaO = BigInt("37")
		const addressKOZovWF = accounts[1]
		const uintZnK4ynC = BigInt("1618")
		const address0fBEl3 = accounts[3]
		const addressxDYYXkb = accounts[0]
		const uintHPYgHFJ = await HungryHoodypIh8ko8.allowance.call(addressWBI47MZ, addressDvWRry, {from: accounts[3]});
		const uintyJClFgb = await HungryHoodypIh8ko8.safeMul.call(uintq9cdGE, uintqlwQP9, {from: accounts[4]});
		const boolhBeXikQ = await HungryHoodypIh8ko8.approve.call(addresspiEEdI, uintijIG42G, {from: accounts[3]});
		const uintJqlrbkh = await HungryHoodypIh8ko8.allowance.call(addresstebY5aB, addressh4BaQRM, {from: accounts[1]});
		const boolwN4VTDd = await HungryHoodypIh8ko8.approve.call(addressKOZovWF, uintmlwpnaO, {from: accounts[1]});
//		const boolpQP3sai = await HungryHoodypIh8ko8.transferFrom.call(addressxDYYXkb, address0fBEl3, uintZnK4ynC, {from: accounts[0]});

		assert.equal(boolhBeXikQ, true)
		assert.equal(boolwN4VTDd, true)
		assert.equal(uintHPYgHFJ, BigInt("0"))
		assert.equal(uintJqlrbkh, BigInt("0"))
		assert.equal(uintyJClFgb, BigInt("3030456"))
		await expect(HungryHoodypIh8ko8.transferFrom.call(addressxDYYXkb, address0fBEl3, uintZnK4ynC, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for HungryHoody', async () => {
		const HungryHoodynFuGXt5 = await HungryHoody.new({from: accounts[0]});
		const uintb9GKZXB = BigInt("397")
		const addressovuqkVs = "0x0000000000000000000000000000000000000001"
		const uintxWnoK94 = BigInt("508")
		const addressGuyJ4CZ = accounts[2]
		const uintVPc0WMP = BigInt("501")
		const uints7RUkTZ = BigInt("1477")
		const addresslnkZpIv = accounts[4]
		const addressOjc9gTL = accounts[1]
		const boolpngoCpm = await HungryHoodynFuGXt5.approve.call(addressovuqkVs, uintb9GKZXB, {from: accounts[4]});
		const boolniP6IBr = await HungryHoodynFuGXt5.transfer.call(addressGuyJ4CZ, uintxWnoK94, {from: accounts[0]});
		const uintIl0ozDm = await HungryHoodynFuGXt5.safeMul.call(uints7RUkTZ, uintVPc0WMP, {from: accounts[0]});
		const uintjyKktS = await HungryHoodynFuGXt5.balanceOf.call(addresslnkZpIv, {from: accounts[4]});
		const uintPZL422 = await HungryHoodynFuGXt5.balanceOf.call(addressOjc9gTL, {from: accounts[2]});
		const uintSQmqVz = await HungryHoodynFuGXt5.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolniP6IBr, true)
		assert.equal(boolpngoCpm, true)
		assert.equal(uintIl0ozDm, BigInt("739977"))
		assert.equal(uintPZL422, BigInt("0"))
		assert.equal(uintSQmqVz, BigInt("25000000000000000000"))
		assert.equal(uintjyKktS, BigInt("0"))
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyYMPpgPh = await HungryHoody.new({from: accounts[3]});
		const uintoBF6Yhq = BigInt("1919")
		const uintCzptfNv = BigInt("308")
		const addresskzNXE5R = accounts[1]
		const uintFNu54H7 = BigInt("188")
		const addressy47VtPy = accounts[4]
		const uintY8o2BtV = BigInt("1322")
		const addressbK8wZe4 = accounts[2]
		const uintvEf0Q3s = BigInt("397")
		const addressqT3fit = accounts[4]
		const uintmBfLBmj = BigInt("396")
		const uintd53ykpn = BigInt("1510")
		const uintxnYmkqc = await HungryHoodyYMPpgPh.safeDiv.call(uintCzptfNv, uintoBF6Yhq, {from: accounts[0]});
		const uintzYywAxN = await HungryHoodyYMPpgPh.balanceOf.call(addresskzNXE5R, {from: accounts[3]});
		const boolhY3BUQj = await HungryHoodyYMPpgPh.approve.call(addressy47VtPy, uintFNu54H7, {from: accounts[2]});
		const boolqjoUAC = await HungryHoodyYMPpgPh.approve.call(addressbK8wZe4, uintY8o2BtV, {from: accounts[3]});
		const boolWHxBdk6 = await HungryHoodyYMPpgPh.transfer.call(addressqT3fit, uintvEf0Q3s, {from: accounts[3]});
		const uintzdt9zps = await HungryHoodyYMPpgPh.safeSub.call(uintd53ykpn, uintmBfLBmj, {from: accounts[4]});

		assert.equal(boolWHxBdk6, true)
		assert.equal(boolhY3BUQj, true)
		assert.equal(boolqjoUAC, true)
		assert.equal(uintxnYmkqc, BigInt("0"))
		assert.equal(uintzYywAxN, BigInt("0"))
		assert.equal(uintzdt9zps, BigInt("1114"))
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyMswdKH = await HungryHoody.new({from: "0x0000000000000000000000000000000000000001"});
		const uintbBjjOcf = BigInt("1457")
		const uintSVbfb5 = BigInt("489")
		const uintrTQCRy8 = BigInt("1154")
		const uintRPd8MA2 = BigInt("73")
		const uintcPiqTnw = BigInt("650")
		const uintIajxCNv = BigInt("1848")
		const uintZGnD9tB = BigInt("1477")
		const uintTGyP5Jx = BigInt("1234")
		const uintktc0PDw = await HungryHoodyMswdKH.safeSub.call(uintSVbfb5, uintbBjjOcf, {from: accounts[5]});
		const uintKTgYu4 = await HungryHoodyMswdKH.safeMul.call(uintRPd8MA2, uintrTQCRy8, {from: accounts[0]});
		const uintNrDMRwM = await HungryHoodyMswdKH.safeSub.call(uintIajxCNv, uintcPiqTnw, {from: accounts[3]});
		const uintzft7H0E = await HungryHoodyMswdKH.safeDiv.call(uintTGyP5Jx, uintZGnD9tB, {from: accounts[1]});
	});
})