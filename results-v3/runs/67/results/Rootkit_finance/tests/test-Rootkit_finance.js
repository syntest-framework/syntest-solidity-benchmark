const Rootkit_finance = artifacts.require("Rootkit_finance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Rootkit_finance', (accounts) => {
	it('test for Rootkit_finance', async () => {
		const Rootkit_financeCDwmfo = await Rootkit_finance.new({from: "0x0000000000000000000000000000000000000001"});
		const uintqomWFV0 = BigInt("869")
		const addressG2wr4V = accounts[0]
		const addressPb6QOaW = accounts[4]
		const addressvdC0720 = accounts[2]
		const uintyylp9Ef = BigInt("1732")
		const addressvg3loDf = accounts[0]
		const addressOsE9vjf = accounts[3]
		const uinthTAo2mT = BigInt("325")
		const addressJYClmRh = accounts[1]
		const boolW45kw75 = await Rootkit_financeCDwmfo.transferFrom.call(addressPb6QOaW, addressG2wr4V, uintqomWFV0, {from: accounts[0]});
		const uint256Xx5eDqp = await Rootkit_financeCDwmfo.totalSupply.call({from: accounts[2]});
		const uint256jE2TLyA = await Rootkit_financeCDwmfo.balanceOf.call(addressvdC0720, {from: accounts[5]});
		const boolQyr1VQt = await Rootkit_financeCDwmfo.transferFrom.call(addressOsE9vjf, addressvg3loDf, uintyylp9Ef, {from: accounts[1]});
		const boolvH9AymG = await Rootkit_financeCDwmfo.transfer.call(addressJYClmRh, uinthTAo2mT, {from: accounts[2]});
	});

	it('test for Rootkit_finance', async () => {
		const Rootkit_financek1BHPw = await Rootkit_finance.new({from: accounts[1]});
		const uintwvVbSX1 = BigInt("1742")
		const addressFwR7dX = accounts[4]
		const addressCAVOMAZ = accounts[4]
		const addressLTKmQqT = accounts[0]
		const uintKSNTw43 = BigInt("918")
		const addressrozYAiB = accounts[4]
		const addresszRHtTaH = accounts[2]
		const addressyG0QJ5z = accounts[5]
		const uinty1yqyO5 = BigInt("887")
		const addressNnx1aX7 = accounts[1]
		const boolFB21iEH = await Rootkit_financek1BHPw.transferFrom.call(addressCAVOMAZ, addressFwR7dX, uintwvVbSX1, {from: accounts[2]});
		const uint256ufeXuxi = await Rootkit_financek1BHPw.balanceOf.call(addressLTKmQqT, {from: accounts[4]});
		const boolzUf7mtQ = await Rootkit_financek1BHPw.transferFrom.call(addresszRHtTaH, addressrozYAiB, uintKSNTw43, {from: accounts[3]});
		const uint256tIhjVhQ = await Rootkit_financek1BHPw.balanceOf.call(addressyG0QJ5z, {from: accounts[5]});
		const boolslK9rBP = await Rootkit_financek1BHPw.transfer.call(addressNnx1aX7, uinty1yqyO5, {from: accounts[0]});

		assert.equal(boolFB21iEH, false)
		assert.equal(boolslK9rBP, false)
		assert.equal(boolzUf7mtQ, false)
		assert.equal(uint256tIhjVhQ, BigInt("0"))
		assert.equal(uint256ufeXuxi, BigInt("0"))
	});

	it('test for Rootkit_finance', async () => {
		const Rootkit_financen4lebm3 = await Rootkit_finance.new({from: accounts[0]});
		const addressxrR6ly1 = accounts[4]
		const addressNiGa561 = accounts[4]
		const addresspQgah4d = accounts[2]
		const uintnDLDFSx = BigInt("859")
		const addressx0cDN8N = accounts[1]
		const uintlARMCi = BigInt("1220")
		const addresshhFob4b = accounts[3]
		const addressm99S02q = accounts[0]
		const addressv2LrI8 = accounts[3]
		const uint256mCmHgnu = await Rootkit_financen4lebm3.balanceOf.call(addressxrR6ly1, {from: accounts[0]});
		const uints8NjQl1 = await Rootkit_financen4lebm3.allowance.call(addresspQgah4d, addressNiGa561, {from: accounts[5]});
		const boolqAUAnu = await Rootkit_financen4lebm3.approve.call(addressx0cDN8N, uintnDLDFSx, {from: accounts[0]});
		const booly5whXoZ = await Rootkit_financen4lebm3.transferFrom.call(addressm99S02q, addresshhFob4b, uintlARMCi, {from: accounts[1]});
		const uint256M06sKz = await Rootkit_financen4lebm3.totalSupply.call({from: accounts[2]});
		const uint256gYjtvrz = await Rootkit_financen4lebm3.balanceOf.call(addressv2LrI8, {from: accounts[3]});

		assert.equal(boolqAUAnu, true)
		assert.equal(booly5whXoZ, false)
		assert.equal(uint256M06sKz, BigInt("10000000000000000000000"))
		assert.equal(uint256gYjtvrz, BigInt("0"))
		assert.equal(uint256mCmHgnu, BigInt("0"))
		assert.equal(uints8NjQl1, BigInt("0"))
	});
})