const HungryHoody = artifacts.require("HungryHoody");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('HungryHoody', (accounts) => {
	it('test for HungryHoody', async () => {
		const HungryHoodyXbvcBzB = await HungryHoody.new({from: accounts[1]});
		const uintxUCg6iB = BigInt("1546")
		const addressjWGrDTa = accounts[2]
		const uintEsuTRrG = BigInt("1738")
		const uintgsfImq1 = BigInt("779")
		const addressUgWqENe = accounts[4]
		const uintId8Hx00 = BigInt("1717")
		const uintQK69WCH = BigInt("1552")
		const boolehOZJa7 = await HungryHoodyXbvcBzB.transfer.call(addressjWGrDTa, uintxUCg6iB, {from: accounts[1]});
		const uintP4yMBfn = await HungryHoodyXbvcBzB.safeMul.call(uintgsfImq1, uintEsuTRrG, {from: accounts[0]});
		const uintzYxcBJY = await HungryHoodyXbvcBzB.balanceOf.call(addressUgWqENe, {from: accounts[2]});
//		const uintCw27qoP = await HungryHoodyXbvcBzB.safeSub.call(uintQK69WCH, uintId8Hx00, {from: accounts[3]});

		assert.equal(boolehOZJa7, true)
		assert.equal(uintP4yMBfn, BigInt("1353902"))
		assert.equal(uintzYxcBJY, BigInt("0"))
		await expect(HungryHoodyXbvcBzB.safeSub.call(uintQK69WCH, uintId8Hx00, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for HungryHoody', async () => {
		const HungryHoodygxfSQNP = await HungryHoody.new({from: accounts[0]});
		const uintZmUqaL = BigInt("1549")
		const addressQtSFM9 = accounts[0]
		const addresssdDioXN = accounts[2]
		const addressi9abjut = accounts[0]
		const uintcMB5j7w = BigInt("1610")
		const uintoaR9OCT = BigInt("1082")
//		const boolzzhhPA6 = await HungryHoodygxfSQNP.transferFrom.call(addresssdDioXN, addressQtSFM9, uintZmUqaL, {from: accounts[2]});
//		const uintlfGCx62 = await HungryHoodygxfSQNP.balanceOf.call(addressi9abjut, {from: accounts[0]});
//		const uintRz8JvKX = await HungryHoodygxfSQNP.safeAdd.call(uintoaR9OCT, uintcMB5j7w, {from: accounts[2]});

		await expect(HungryHoodygxfSQNP.transferFrom.call(addresssdDioXN, addressQtSFM9, uintZmUqaL, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for HungryHoody', async () => {
		const HungryHoodytcG9h7R = await HungryHoody.new({from: accounts[2]});
		const addressqDM1yM = accounts[3]
		const uintYy56tpR = BigInt("451")
		const addressjSv5Gis = accounts[1]
		const addressX6CX1rz = accounts[0]
		const uinta9p6s9 = BigInt("1767")
		const uintncb5XB = BigInt("419")
		const uintqAno0BU = await HungryHoodytcG9h7R.balanceOf.call(addressqDM1yM, {from: accounts[3]});
		const boolNSM8iaV = await HungryHoodytcG9h7R.approve.call(addressjSv5Gis, uintYy56tpR, {from: accounts[0]});
		const uintyb6lJh3 = await HungryHoodytcG9h7R.balanceOf.call(addressX6CX1rz, {from: accounts[2]});
		const uintk5XFBHr = await HungryHoodytcG9h7R.safeAdd.call(uintncb5XB, uinta9p6s9, {from: accounts[4]});

		assert.equal(boolNSM8iaV, true)
		assert.equal(uintk5XFBHr, BigInt("2186"))
		assert.equal(uintqAno0BU, BigInt("0"))
		assert.equal(uintyb6lJh3, BigInt("0"))
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyA8A3qjt = await HungryHoody.new({from: accounts[0]});
		const uintNL8KgCF = BigInt("1919")
		const addressZz9X1q2 = accounts[3]
		const addressAsOGER3 = accounts[0]
		const uintWLusttY = BigInt("589")
		const uintHqSnxLK = BigInt("777")
		const uintaz8yLE = await HungryHoodyA8A3qjt.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolT2cCS58 = await HungryHoodyA8A3qjt.transferFrom.call(addressAsOGER3, addressZz9X1q2, uintNL8KgCF, {from: accounts[0]});
//		const uintImtuEdT = await HungryHoodyA8A3qjt.safeSub.call(uintHqSnxLK, uintWLusttY, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintaz8yLE, BigInt("25000000000000000000"))
		await expect(HungryHoodyA8A3qjt.transferFrom.call(addressAsOGER3, addressZz9X1q2, uintNL8KgCF, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyuGdn5A = await HungryHoody.new({from: accounts[4]});
		const addresscdARBTW = accounts[5]
		const addresssWnWDTX = accounts[2]
		const uintfRnbAGM = BigInt("575")
		const uintHY7NhT = BigInt("45")
		const addressd5gHxUt = accounts[0]
		const uintf5sts7y = BigInt("1815")
		const uinteGOVHB3 = BigInt("990")
		const uintL0vxTC = BigInt("1944")
		const uintpI93pJE = BigInt("284")
		const uintCm68RqK = await HungryHoodyuGdn5A.allowance.call(addresssWnWDTX, addresscdARBTW, {from: accounts[4]});
		const uintJDUaX7J = await HungryHoodyuGdn5A.safeMul.call(uintHY7NhT, uintfRnbAGM, {from: accounts[1]});
		const uintbQ7T61W = await HungryHoodyuGdn5A.balanceOf.call(addressd5gHxUt, {from: accounts[3]});
		const uintrYF3dkY = await HungryHoodyuGdn5A.safeDiv.call(uinteGOVHB3, uintf5sts7y, {from: accounts[3]});
//		const uintJSYmAhP = await HungryHoodyuGdn5A.safeSub.call(uintpI93pJE, uintL0vxTC, {from: accounts[1]});

		assert.equal(uintCm68RqK, BigInt("0"))
		assert.equal(uintJDUaX7J, BigInt("25875"))
		assert.equal(uintbQ7T61W, BigInt("0"))
		assert.equal(uintrYF3dkY, BigInt("0"))
		await expect(HungryHoodyuGdn5A.safeSub.call(uintpI93pJE, uintL0vxTC, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for HungryHoody', async () => {
		const HungryHoodybq9qdeZ = await HungryHoody.new({from: "0x0000000000000000000000000000000000000001"});
		const addresseEYuvol = accounts[0]
		const addressWvBe8Pc = accounts[5]
		const addressEz0BFeB = accounts[0]
		const uintjnMFuP = BigInt("347")
		const addressAvfoToU = accounts[2]
		const addressAH3X2nN = accounts[2]
		const uintoD0WaEm = BigInt("1957")
		const uintMZt2ymc = BigInt("432")
		const uintdJRxo5g = await HungryHoodybq9qdeZ.balanceOf.call(addresseEYuvol, {from: accounts[2]});
		const uintvIgJyde = await HungryHoodybq9qdeZ.allowance.call(addressEz0BFeB, addressWvBe8Pc, {from: accounts[4]});
		const boolC5LPQvx = await HungryHoodybq9qdeZ.transferFrom.call(addressAH3X2nN, addressAvfoToU, uintjnMFuP, {from: accounts[4]});
		const uintNRSOFLm = await HungryHoodybq9qdeZ.totalSupply.call({from: accounts[0]});
		const uintJCHtCCa = await HungryHoodybq9qdeZ.safeMul.call(uintMZt2ymc, uintoD0WaEm, {from: accounts[2]});
	});
})