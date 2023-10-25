const Core_Fi_V3 = artifacts.require("Core_Fi_V3");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Core_Fi_V3', (accounts) => {
	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3A5GyUdb = await Core_Fi_V3.new({from: accounts[1]});
		const addressClDys3j = accounts[1]
		const address5vOE4g = accounts[4]
		const addressnondOX = accounts[0]
		const uintDszsdI9 = await Core_Fi_V3A5GyUdb.allowance.call(address5vOE4g, addressClDys3j, {from: accounts[4]});
		const uint256yEehims = await Core_Fi_V3A5GyUdb.balanceOf.call(addressnondOX, {from: accounts[1]});
		const uint256ZNciBRA = await Core_Fi_V3A5GyUdb.totalSupply.call({from: accounts[4]});

		assert.equal(uint256ZNciBRA, BigInt("84000000000000000000000"))
		assert.equal(uint256yEehims, BigInt("0"))
		assert.equal(uintDszsdI9, BigInt("0"))
	});

	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3FNbhVwX = await Core_Fi_V3.new({from: accounts[1]});
		const uintCdfZj2c = BigInt("1703")
		const addressE41Yoxc = "0x0000000000000000000000000000000000000001"
		const uintWEARDks = BigInt("46")
		const address42KtcB = accounts[2]
		const addressp3Xao5i = accounts[0]
		const uintqLP7JuP = BigInt("1126")
		const addressD4A1Igg = accounts[0]
		const addresssalV5c0 = accounts[0]
		const addressu8m7Trg = accounts[3]
		const addressw6IUjOm = accounts[1]
		const booldW5WfMd = await Core_Fi_V3FNbhVwX.transfer.call(addressE41Yoxc, uintCdfZj2c, {from: accounts[2]});
		const boolrDE4ma = await Core_Fi_V3FNbhVwX.transferFrom.call(addressp3Xao5i, address42KtcB, uintWEARDks, {from: accounts[3]});
		const boolTAkbCaD = await Core_Fi_V3FNbhVwX.transfer.call(addressD4A1Igg, uintqLP7JuP, {from: accounts[3]});
		const uint256NkxILJM = await Core_Fi_V3FNbhVwX.balanceOf.call(addresssalV5c0, {from: accounts[5]});
		const uint256UkZbqav = await Core_Fi_V3FNbhVwX.balanceOf.call(addressu8m7Trg, {from: accounts[1]});
		const uint256TA509AE = await Core_Fi_V3FNbhVwX.balanceOf.call(addressw6IUjOm, {from: accounts[2]});

		assert.equal(boolTAkbCaD, false)
		assert.equal(booldW5WfMd, false)
		assert.equal(boolrDE4ma, false)
		assert.equal(uint256NkxILJM, BigInt("0"))
		assert.equal(uint256TA509AE, BigInt("84000000000000000000000"))
		assert.equal(uint256UkZbqav, BigInt("0"))
	});

	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3hqcrDOc = await Core_Fi_V3.new({from: "0x0000000000000000000000000000000000000001"});
		const uintpT4r50n = BigInt("1956")
		const addressCTYblLX = accounts[3]
		const uintazbNDLu = BigInt("1046")
		const addressLIEBZR5 = accounts[1]
		const uintjHEqjDF = BigInt("1108")
		const addressWRab6P = "0x0000000000000000000000000000000000000001"
		const addressKUDWX0T = accounts[4]
		const boolIWdF7PF = await Core_Fi_V3hqcrDOc.transfer.call(addressCTYblLX, uintpT4r50n, {from: accounts[5]});
		const boolGfzoHH = await Core_Fi_V3hqcrDOc.transfer.call(addressLIEBZR5, uintazbNDLu, {from: accounts[4]});
		const boolZPyeHoX = await Core_Fi_V3hqcrDOc.transferFrom.call(addressKUDWX0T, addressWRab6P, uintjHEqjDF, {from: accounts[1]});
	});

	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3PE2fy0q = await Core_Fi_V3.new({from: accounts[1]});
		const addressh7Jpn9t = accounts[3]
		const addressHjNGYe = accounts[0]
		const uinteTJZ7eO = BigInt("737")
		const addresswNWZdzj = accounts[5]
		const uintd7KzzUX = await Core_Fi_V3PE2fy0q.allowance.call(addressHjNGYe, addressh7Jpn9t, {from: accounts[0]});
		const booljfvLIlc = await Core_Fi_V3PE2fy0q.approve.call(addresswNWZdzj, uinteTJZ7eO, {from: accounts[0]});

		assert.equal(booljfvLIlc, true)
		assert.equal(uintd7KzzUX, BigInt("0"))
	});
})