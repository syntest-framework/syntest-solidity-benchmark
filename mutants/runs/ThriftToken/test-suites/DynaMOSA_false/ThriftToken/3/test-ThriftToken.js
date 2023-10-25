const ThriftToken = artifacts.require("ThriftToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ThriftToken', (accounts) => {
	it('test for ThriftToken', async () => {
		const ThriftTokennEg0aXG = await ThriftToken.new({from: accounts[2]});
		const uintObZmShR = BigInt("1517")
		const addressnVXtJqf = accounts[2]
		const uintg5kX9N = BigInt("1630")
		const addressWPTqVzL = accounts[1]
		const uintNvsbXp8 = BigInt("1399")
		const addressdh6CzB = accounts[3]
		const addressfMF9bGZ = accounts[3]
		const addressa8McZ3H = accounts[4]
		const uintltkv4G4 = BigInt("951")
		const addressW0NscDM = accounts[3]
		const addressNUNIlRq = accounts[0]
		const boolOoxQ1XF = await ThriftTokennEg0aXG.approve.call(addressnVXtJqf, uintObZmShR, {from: accounts[0]});
		const boolI7OxchI = await ThriftTokennEg0aXG.approve.call(addressWPTqVzL, uintg5kX9N, {from: accounts[1]});
		const boolAdlpcEX = await ThriftTokennEg0aXG.transferFrom.call(addressfMF9bGZ, addressdh6CzB, uintNvsbXp8, {from: accounts[2]});
		const addresswHDB5K = await ThriftTokennEg0aXG.transferOwnership.call(addressa8McZ3H, {from: accounts[0]});
		const booljHruEz7 = await ThriftTokennEg0aXG.transferFrom.call(addressNUNIlRq, addressW0NscDM, uintltkv4G4, {from: accounts[4]});

		assert.equal(boolOoxQ1XF, true)
		await expect(ThriftTokennEg0aXG.approve.call(addressWPTqVzL, uintg5kX9N, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenK6b7yIi = await ThriftToken.new({from: accounts[5]});
		const addressoNZtUGV = accounts[3]
		const addressujCDsVW = accounts[3]
		const uintSoG5oE = BigInt("1533")
		const addressYI8fqC = "0x0000000000000000000000000000000000000001"
		const addressN4NxEE = accounts[4]
		const uints1AEc0a = BigInt("913")
		const addresszsrBIm9 = accounts[1]
		const uintTBUSbUW = BigInt("888")
		const address6l3UuA = accounts[4]
		const uint256eai00Md = await ThriftTokenK6b7yIi.balanceOf.call(addressoNZtUGV, {from: accounts[2]});
		const uint256siQx5vm = await ThriftTokenK6b7yIi.balanceOf.call(addressujCDsVW, {from: accounts[0]});
		const boolNysBwQb = await ThriftTokenK6b7yIi.transferFrom.call(addressN4NxEE, addressYI8fqC, uintSoG5oE, {from: accounts[4]});
		const boolzGtULoJ = await ThriftTokenK6b7yIi.increaseApproval.call(addresszsrBIm9, uints1AEc0a, {from: accounts[2]});
		const boolQwzo8dH = await ThriftTokenK6b7yIi.transfer.call(address6l3UuA, uintTBUSbUW, {from: accounts[3]});

		assert.equal(uint256eai00Md, BigInt("0"))
		assert.equal(uint256siQx5vm, BigInt("0"))
		await expect(ThriftTokenK6b7yIi.transferFrom.call(addressN4NxEE, addressYI8fqC, uintSoG5oE, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenPV1sG3J = await ThriftToken.new({from: accounts[0]});
		const addressGqLQL1w = accounts[3]
		const uinth5wf5Kk = BigInt("1050")
		const addressj8Wu2Pm = accounts[3]
		const addressc3XTkQg = accounts[3]
		const uintm2HoRn = BigInt("68")
		const addressuBCjKoM = accounts[3]
		const addressLxzAWyL = accounts[0]
		const uint256wuU3v6l = await ThriftTokenPV1sG3J.transferableTokens.call(addressGqLQL1w, {from: accounts[3]});
		const boolp3SMPJy = await ThriftTokenPV1sG3J.increaseApproval.call(addressj8Wu2Pm, uinth5wf5Kk, {from: accounts[4]});
		const uint256S5j16xe = await ThriftTokenPV1sG3J.balanceOf.call(addressc3XTkQg, {from: accounts[3]});
		const boolobKhOh = await ThriftTokenPV1sG3J.transferFrom.call(addressLxzAWyL, addressuBCjKoM, uintm2HoRn, {from: accounts[4]});

		assert.equal(boolp3SMPJy, true)
		assert.equal(uint256S5j16xe, BigInt("0"))
		assert.equal(uint256wuU3v6l, BigInt("0"))
		await expect(ThriftTokenPV1sG3J.transferFrom.call(addressLxzAWyL, addressuBCjKoM, uintm2HoRn, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenOLkxiFa = await ThriftToken.new({from: accounts[0]});
		const uintEY7p7tc = BigInt("1754")
		const addressNbxxbT = accounts[4]
		const uintsPPsnYs = BigInt("65")
		const addressN9ZFtRc = accounts[1]
		const addresssNUbZaj = accounts[4]
		const uintz3GYOeR = BigInt("77")
		const addressQc8RuH1 = accounts[3]
		const uintDJIY36J = BigInt("796")
		const addressQfOFJ6u = accounts[5]
		const addressDEt06jg = accounts[0]
		const boolynQPUCo = await ThriftTokenOLkxiFa.decreaseApproval.call(addressNbxxbT, uintEY7p7tc, {from: accounts[1]});
		const boolC4yT6E6 = await ThriftTokenOLkxiFa.transferFrom.call(addresssNUbZaj, addressN9ZFtRc, uintsPPsnYs, {from: accounts[0]});
		const boolpBkYllX = await ThriftTokenOLkxiFa.approve.call(addressQc8RuH1, uintz3GYOeR, {from: accounts[5]});
		const booluYZKhOB = await ThriftTokenOLkxiFa.transfer.call(addressQfOFJ6u, uintDJIY36J, {from: accounts[0]});
		const uint256KnD3NKJ = await ThriftTokenOLkxiFa.balanceOf.call(addressDEt06jg, {from: accounts[4]});

		assert.equal(boolynQPUCo, true)
		await expect(ThriftTokenOLkxiFa.transferFrom.call(addresssNUbZaj, addressN9ZFtRc, uintsPPsnYs, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenN2Ow5A = await ThriftToken.new({from: accounts[4]});
		const addressg4yZEAV = "0x0000000000000000000000000000000000000001"
		const uint07DSsZ = BigInt("1279")
		const addressmyT9ivA = accounts[4]
		const addressumHGSra = accounts[0]
		const addressFrG8Fh = accounts[2]
		const addressNGfqW6x = accounts[3]
		const uintqUhb5v8 = BigInt("1588")
		const addressOY9AfIK = accounts[4]
		const uint256ZqiRhJr = await ThriftTokenN2Ow5A.balanceOf.call(addressg4yZEAV, {from: accounts[5]});
		const boolCUPucjj = await ThriftTokenN2Ow5A.decreaseApproval.call(addressmyT9ivA, uint07DSsZ, {from: accounts[3]});
		const addressYnKBgvj = await ThriftTokenN2Ow5A.transferOwnership.call(addressumHGSra, {from: accounts[1]});
		const addressBe37BL0 = await ThriftTokenN2Ow5A.transferOwnership.call(addressFrG8Fh, {from: accounts[5]});
		const uint256vFi4HJs = await ThriftTokenN2Ow5A.transferableTokens.call(addressNGfqW6x, {from: accounts[0]});
		const boolKvGJBDd = await ThriftTokenN2Ow5A.increaseApproval.call(addressOY9AfIK, uintqUhb5v8, {from: accounts[4]});

		assert.equal(boolCUPucjj, true)
		assert.equal(uint256ZqiRhJr, BigInt("0"))
		await expect(ThriftTokenN2Ow5A.transferOwnership.call(addressumHGSra, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokengvC8qVW = await ThriftToken.new({from: accounts[2]});
		const addressVZ1Ylze = accounts[1]
		const addressEWl2Z99 = accounts[2]
		const addressRArjyVd = "0x0000000000000000000000000000000000000001"
		const addressa99TgRb = accounts[1]
		const uintVhkmFsX = BigInt("1339")
		const addressKtZQxqZ = accounts[2]
		const uintXXVcKbg = BigInt("280")
		const addressdtZJzLi = accounts[0]
		const addressjcWIG63 = accounts[4]
		const uintiaQvISq = BigInt("672")
		const addressRvaChXy = accounts[0]
		const uint256nVI6tEo = await ThriftTokengvC8qVW.balanceOf.call(addressVZ1Ylze, {from: accounts[4]});
		const uint256ebWbnJA = await ThriftTokengvC8qVW.allowance.call(addressRArjyVd, addressEWl2Z99, {from: accounts[4]});
		const uint256FSrGvg = await ThriftTokengvC8qVW.balanceOf.call(addressa99TgRb, {from: accounts[4]});
		const boolSNdMK4z = await ThriftTokengvC8qVW.approve.call(addressKtZQxqZ, uintVhkmFsX, {from: accounts[2]});
		const boolvlW4NoE = await ThriftTokengvC8qVW.transferFrom.call(addressjcWIG63, addressdtZJzLi, uintXXVcKbg, {from: accounts[3]});
		const boolLBnQqpH = await ThriftTokengvC8qVW.increaseApproval.call(addressRvaChXy, uintiaQvISq, {from: accounts[3]});

		assert.equal(uint256FSrGvg, BigInt("0"))
		assert.equal(uint256ebWbnJA, BigInt("0"))
		assert.equal(uint256nVI6tEo, BigInt("0"))
		await expect(ThriftTokengvC8qVW.approve.call(addressKtZQxqZ, uintVhkmFsX, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenEIOoGZH = await ThriftToken.new({from: accounts[0]});
		const addresslFpYN1t = accounts[3]
		const uintSgGF76r = BigInt("1612")
		const addressjv8v2Zw = accounts[0]
		const uintGvQ4RU3 = BigInt("815")
		const addresscWOUXHX = accounts[5]
		const uintc53RAAH = BigInt("1804")
		const addressKl5oFtw = accounts[2]
		const uintqy6zWSp = BigInt("234")
		const addressDzmc1Y = accounts[0]
		const uint256qlNAZLh = await ThriftTokenEIOoGZH.transferableTokens.call(addresslFpYN1t, {from: accounts[2]});
		const boolcxQk3Sm = await ThriftTokenEIOoGZH.increaseApproval.call(addressjv8v2Zw, uintSgGF76r, {from: accounts[2]});
		const boolHpASCOS = await ThriftTokenEIOoGZH.transfer.call(addresscWOUXHX, uintGvQ4RU3, {from: accounts[1]});
		const boolK9sDoXz = await ThriftTokenEIOoGZH.approve.call(addressKl5oFtw, uintc53RAAH, {from: accounts[0]});
		const boolPfID9u6 = await ThriftTokenEIOoGZH.transfer.call(addressDzmc1Y, uintqy6zWSp, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolcxQk3Sm, true)
		assert.equal(uint256qlNAZLh, BigInt("0"))
		await expect(ThriftTokenEIOoGZH.transfer.call(addresscWOUXHX, uintGvQ4RU3, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenvFatB28 = await ThriftToken.new({from: "0x0000000000000000000000000000000000000001"});
		const uintbGol1jG = BigInt("332")
		const addressyPuQ35 = accounts[3]
		const uintC61aJsZ = BigInt("2028")
		const addresswp4d5Hb = accounts[3]
		const uintooQ2UcR = BigInt("1863")
		const addressQvhwXN6 = accounts[0]
		const uintXsUpjhf = BigInt("854")
		const addressXJgz0i = accounts[1]
		const boolu1Ilmty = await ThriftTokenvFatB28.transfer.call(addressyPuQ35, uintbGol1jG, {from: accounts[0]});
		const boolHrH6VJ = await ThriftTokenvFatB28.transfer.call(addresswp4d5Hb, uintC61aJsZ, {from: accounts[0]});
		const booldxP9FcI = await ThriftTokenvFatB28.decreaseApproval.call(addressQvhwXN6, uintooQ2UcR, {from: accounts[5]});
		const bool0rU813 = await ThriftTokenvFatB28.transfer.call(addressXJgz0i, uintXsUpjhf, {from: accounts[4]});
	});
})