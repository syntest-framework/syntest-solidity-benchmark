const RIT = artifacts.require("RIT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('RIT', (accounts) => {
	it('test for RIT', async () => {
		const RITeE5R8Sy = await RIT.new({from: accounts[2]});
		const uintc8jH9OG = BigInt("1112")
		const addressTGYKd1h = accounts[4]
		const addressN3xBTTP = accounts[4]
		const uint8fbn3du = await RITeE5R8Sy.decimals.call({from: accounts[5]});
		const stringLNzpd2L = await RITeE5R8Sy.name.call({from: accounts[3]});
//		const booleOAjHK5 = await RITeE5R8Sy.transferFrom.call(addressN3xBTTP, addressTGYKd1h, uintc8jH9OG, {from: accounts[3]});
//		const uint256skb2Noa = await RITeE5R8Sy.totalSupply.call({from: accounts[3]});

		assert.equal(stringLNzpd2L, "Real Estate Investment Token")
		assert.equal(uint8fbn3du, BigInt("18"))
		await expect(RITeE5R8Sy.transferFrom.call(addressN3xBTTP, addressTGYKd1h, uintc8jH9OG, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITVXEjtha = await RIT.new({from: accounts[4]});
		const uintcMlrlYe = BigInt("1206")
		const addressu5AiFui = accounts[3]
		const uintuSdYBqo = BigInt("1009")
		const addressNIuNY6X = accounts[1]
		const uintIB6JyRF = BigInt("1120")
		const addressgxGf44y = accounts[4]
		const boolqrKpy8o = await RITVXEjtha.increaseAllowance.call(addressu5AiFui, uintcMlrlYe, {from: accounts[0]});
		const uint8TCNtO0r = await RITVXEjtha.decimals.call({from: accounts[2]});
		const stringdyy6c6h = await RITVXEjtha.symbol.call({from: accounts[0]});
//		const boolqCsyP0C = await RITVXEjtha.decreaseAllowance.call(addressNIuNY6X, uintuSdYBqo, {from: accounts[4]});
//		const booleGbIRW5 = await RITVXEjtha.approve.call(addressgxGf44y, uintIB6JyRF, {from: accounts[1]});

		assert.equal(boolqrKpy8o, true)
		assert.equal(stringdyy6c6h, "RIT 2.0")
		assert.equal(uint8TCNtO0r, BigInt("18"))
		await expect(RITVXEjtha.decreaseAllowance.call(addressNIuNY6X, uintuSdYBqo, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITgUSwnk7 = await RIT.new({from: accounts[3]});
		const addresstdIrAjY = accounts[1]
		const addressDBT3VE2 = accounts[2]
		const uintIVra0xb = BigInt("60")
		const addressi5xUio = accounts[1]
		const addressMLbCvWC = accounts[3]
		const addressN5Amy0C = accounts[5]
		const stringv8noPLT = await RITgUSwnk7.name.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256FmoAr9c = await RITgUSwnk7.allowance.call(addressDBT3VE2, addresstdIrAjY, {from: accounts[0]});
		const boolwvF5bWk = await RITgUSwnk7.increaseAllowance.call(addressi5xUio, uintIVra0xb, {from: accounts[4]});
		const uint256AAracgb = await RITgUSwnk7.allowance.call(addressN5Amy0C, addressMLbCvWC, {from: accounts[4]});

		assert.equal(boolwvF5bWk, true)
		assert.equal(stringv8noPLT, "Real Estate Investment Token")
		assert.equal(uint256AAracgb, BigInt("0"))
		assert.equal(uint256FmoAr9c, BigInt("0"))
	});

	it('test for RIT', async () => {
		const RITBcBnhJT = await RIT.new({from: "0x0000000000000000000000000000000000000001"});
		const uintMvooyR3 = BigInt("2039")
		const addressURWRii5 = accounts[2]
		const uintaUFgJOr = BigInt("1895")
		const addresslJIX6jq = accounts[0]
		const addressNiyHnhj = accounts[1]
		const addressuuNIdqP = accounts[5]
		const uintwy7AZN9 = BigInt("876")
		const addressaXc1Vwd = accounts[1]
		const boolmEBym3a = await RITBcBnhJT.decreaseAllowance.call(addressURWRii5, uintMvooyR3, {from: accounts[3]});
		const uint256IBO5oNq = await RITBcBnhJT.totalSupply.call({from: accounts[1]});
		const boolUbsMUVS = await RITBcBnhJT.decreaseAllowance.call(addresslJIX6jq, uintaUFgJOr, {from: accounts[3]});
		const uint256bqYTFMs = await RITBcBnhJT.allowance.call(addressuuNIdqP, addressNiyHnhj, {from: accounts[4]});
		const boolP6Olan9 = await RITBcBnhJT.increaseAllowance.call(addressaXc1Vwd, uintwy7AZN9, {from: accounts[3]});
	});

	it('test for RIT', async () => {
		const RITArux0DK = await RIT.new({from: accounts[5]});
		const uintdxWog59 = BigInt("1557")
		const addressEN9dJmL = accounts[4]
		const addressoy9pzQm = accounts[4]
		const addresskw6iBqG = accounts[2]
		const uintxf2qv3x = BigInt("36")
		const addressyb7AFl0 = accounts[0]
		const boolJP2IZE = await RITArux0DK.increaseAllowance.call(addressEN9dJmL, uintdxWog59, {from: "0x0000000000000000000000000000000000000001"});
		const uint256XueutmH = await RITArux0DK.balanceOf.call(addressoy9pzQm, {from: accounts[5]});
		const uint256GxunyUR = await RITArux0DK.balanceOf.call(addresskw6iBqG, {from: accounts[0]});
//		const boolsPOX0nr = await RITArux0DK.decreaseAllowance.call(addressyb7AFl0, uintxf2qv3x, {from: accounts[4]});

		assert.equal(boolJP2IZE, true)
		assert.equal(uint256GxunyUR, BigInt("0"))
		assert.equal(uint256XueutmH, BigInt("0"))
		await expect(RITArux0DK.decreaseAllowance.call(addressyb7AFl0, uintxf2qv3x, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RIT8ZbyNx = await RIT.new({from: accounts[2]});
		const uintB0qYOcJ = BigInt("1906")
		const addressOa1GlZ = accounts[3]
		const addressZELFjKN = accounts[0]
		const stringWwFhT4t = await RIT8ZbyNx.name.call({from: accounts[1]});
//		const uint256uGjUIW = await RIT8ZbyNx._burn.call(uintB0qYOcJ, {from: accounts[4]});
//		const uint256oRtwKtw = await RIT8ZbyNx.allowance.call(addressZELFjKN, addressOa1GlZ, {from: accounts[2]});

		assert.equal(stringWwFhT4t, "Real Estate Investment Token")
		await expect(RIT8ZbyNx._burn.call(uintB0qYOcJ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RIT8ZbyNx = await RIT.new({from: accounts[2]});
		const uintdkWCGmc = BigInt("1450")
		const addressLBwVRDB = accounts[4]
		const uintONab4k1 = BigInt("1909")
		const addresstExHLJL = accounts[3]
		const addressmyRMHE4 = accounts[0]
		const stringWwFhT4t = await RIT8ZbyNx.name.call({from: accounts[1]});
		const uint256TB1Ki7 = await RIT8ZbyNx.totalSupply.call({from: accounts[0]});
		const boolbOBaEnt = await RIT8ZbyNx.increaseAllowance.call(addressLBwVRDB, uintdkWCGmc, {from: accounts[4]});
		const uint256WotCzN6 = await RIT8ZbyNx.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256uGjUIW = await RIT8ZbyNx._burn.call(uintONab4k1, {from: accounts[4]});
//		const uint256oRtwKtw = await RIT8ZbyNx.allowance.call(addressmyRMHE4, addresstExHLJL, {from: accounts[2]});

		assert.equal(boolbOBaEnt, true)
		assert.equal(stringWwFhT4t, "Real Estate Investment Token")
		assert.equal(uint256TB1Ki7, BigInt("500000000000000000000000000"))
		assert.equal(uint256WotCzN6, BigInt("500000000000000000000000000"))
		await expect(RIT8ZbyNx._burn.call(uintONab4k1, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITSM56Iqs = await RIT.new({from: accounts[3]});
		const uintlhYTZUf = BigInt("689")
		const addressHGzKkPM = accounts[1]
		const uintifTreMq = BigInt("1371")
		const addresswTxl7Zh = accounts[2]
		const uint8a6shtLW = await RITSM56Iqs.decimals.call({from: accounts[2]});
		const boolbF9fpH = await RITSM56Iqs.increaseAllowance.call(addressHGzKkPM, uintlhYTZUf, {from: accounts[2]});
//		const boolEW0FiyC = await RITSM56Iqs.transfer.call(addresswTxl7Zh, uintifTreMq, {from: accounts[2]});
//		const stringML5gY6f = await RITSM56Iqs.symbol.call({from: accounts[1]});

		assert.equal(boolbF9fpH, true)
		assert.equal(uint8a6shtLW, BigInt("18"))
		await expect(RITSM56Iqs.transfer.call(addresswTxl7Zh, uintifTreMq, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITrAgqTvp = await RIT.new({from: accounts[3]});
		const uintpKriQCV = BigInt("845")
		const addressBrkEqbi = accounts[4]
		const addressi3b5Bwg = accounts[0]
		const boolHzSY8yk = await RITrAgqTvp.approve.call(addressBrkEqbi, uintpKriQCV, {from: accounts[3]});
		const uint256FwZBUn = await RITrAgqTvp.totalSupply.call({from: accounts[5]});
		const uint256tZQV8v7 = await RITrAgqTvp.balanceOf.call(addressi3b5Bwg, {from: accounts[4]});
		const uint256QgqaIwG = await RITrAgqTvp.totalSupply.call({from: accounts[4]});

		assert.equal(boolHzSY8yk, true)
		assert.equal(uint256FwZBUn, BigInt("500000000000000000000000000"))
		assert.equal(uint256QgqaIwG, BigInt("500000000000000000000000000"))
		assert.equal(uint256tZQV8v7, BigInt("0"))
	});
})