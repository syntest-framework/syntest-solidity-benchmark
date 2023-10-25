const Rootkit_finance = artifacts.require("Rootkit_finance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Rootkit_finance', (accounts) => {
	it('test for Rootkit_finance', async () => {
		const Rootkit_financeZ2112fO = await Rootkit_finance.new({from: accounts[1]});
		const addressNhKjRuD = accounts[0]
		const addressjQghYhd = accounts[3]
		const addressEn5WYFk = accounts[2]
		const addresspu2c8S5 = accounts[3]
		const uintzErkIKa = BigInt("914")
		const addresskEE0uUB = "0x0000000000000000000000000000000000000001"
		const uintey9lTYF = await Rootkit_financeZ2112fO.allowance.call(addressjQghYhd, addressNhKjRuD, {from: accounts[2]});
		const uintjUrdEgU = await Rootkit_financeZ2112fO.allowance.call(addresspu2c8S5, addressEn5WYFk, {from: accounts[4]});
		const boolRJ9EqKZ = await Rootkit_financeZ2112fO.transfer.call(addresskEE0uUB, uintzErkIKa, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolRJ9EqKZ, false)
		assert.equal(uintey9lTYF, BigInt("0"))
		assert.equal(uintjUrdEgU, BigInt("0"))
	});

	it('test for Rootkit_finance', async () => {
		const Rootkit_financef0o2FU9 = await Rootkit_finance.new({from: accounts[0]});
		const uinthDJtliL = BigInt("446")
		const addressW1ds48Q = "0x0000000000000000000000000000000000000001"
		const addressqx0cod = accounts[1]
		const addressGmeMJWG = accounts[4]
		const addressGpCzdnm = accounts[1]
		const boolOh1d8Zh = await Rootkit_financef0o2FU9.transfer.call(addressW1ds48Q, uinthDJtliL, {from: accounts[1]});
		const uint256lmi0Qns = await Rootkit_financef0o2FU9.balanceOf.call(addressqx0cod, {from: accounts[3]});
		const uintHiUiK5j = await Rootkit_financef0o2FU9.allowance.call(addressGpCzdnm, addressGmeMJWG, {from: accounts[3]});

		assert.equal(boolOh1d8Zh, false)
		assert.equal(uint256lmi0Qns, BigInt("0"))
		assert.equal(uintHiUiK5j, BigInt("0"))
	});

	it('test for Rootkit_finance', async () => {
		const Rootkit_financew2VKW76 = await Rootkit_finance.new({from: "0x0000000000000000000000000000000000000001"});
		const addressH1fcHj5 = accounts[3]
		const uintL0SBTsl = BigInt("1532")
		const addresszk3hChN = accounts[1]
		const addresshscf8Cr = accounts[0]
		const addressCrb0hhv = accounts[4]
		const uint256IFdyXt = await Rootkit_financew2VKW76.balanceOf.call(addressH1fcHj5, {from: accounts[2]});
		const boolcypD23W = await Rootkit_financew2VKW76.transfer.call(addresszk3hChN, uintL0SBTsl, {from: accounts[3]});
		const uint256xn7ffOz = await Rootkit_financew2VKW76.balanceOf.call(addresshscf8Cr, {from: accounts[5]});
		const uint256XaRYiZ4 = await Rootkit_financew2VKW76.balanceOf.call(addressCrb0hhv, {from: accounts[4]});
	});

	it('test for Rootkit_finance', async () => {
		const Rootkit_financeosXcRfV = await Rootkit_finance.new({from: accounts[1]});
		const uintu6HxHt2 = BigInt("910")
		const addressGUCxA9o = accounts[0]
		const addressNFiXmqj = accounts[1]
		const addressLJNlfJk = accounts[2]
		const addressgwnYZk4 = accounts[4]
		const addressD02RYRM = "0x0000000000000000000000000000000000000001"
		const boolWzyWmtb = await Rootkit_financeosXcRfV.transferFrom.call(addressNFiXmqj, addressGUCxA9o, uintu6HxHt2, {from: accounts[2]});
		const uintDQnFG3A = await Rootkit_financeosXcRfV.allowance.call(addressgwnYZk4, addressLJNlfJk, {from: accounts[2]});
		const uint256M09UGYu = await Rootkit_financeosXcRfV.balanceOf.call(addressD02RYRM, {from: accounts[4]});
		const uint256kxL3HJ1 = await Rootkit_financeosXcRfV.totalSupply.call({from: accounts[3]});

		assert.equal(boolWzyWmtb, false)
		assert.equal(uint256M09UGYu, BigInt("0"))
		assert.equal(uint256kxL3HJ1, BigInt("10000000000000000000000"))
		assert.equal(uintDQnFG3A, BigInt("0"))
	});

	it('test for Rootkit_finance', async () => {
		const Rootkit_financeaFcypEq = await Rootkit_finance.new({from: accounts[0]});
		const addressoZSIiPG = accounts[0]
		const addressoFJDXn = accounts[5]
		const uintS13aw1x = BigInt("1238")
		const addressh8hJ5Lg = accounts[1]
		const addressqhkoowe = accounts[3]
		const uintut23eHR = BigInt("1215")
		const addressFyh3gIA = accounts[3]
		const addressWTgD9e5 = accounts[1]
		const addresskEqJLO = "0x0000000000000000000000000000000000000001"
		const addresst9IXKa = accounts[3]
		const addressKVyoHa8 = accounts[3]
		const uinthJdVvBB = await Rootkit_financeaFcypEq.allowance.call(addressoFJDXn, addressoZSIiPG, {from: accounts[0]});
		const boolUd13WgY = await Rootkit_financeaFcypEq.transferFrom.call(addressqhkoowe, addressh8hJ5Lg, uintS13aw1x, {from: accounts[3]});
		const boolrTCJRaP = await Rootkit_financeaFcypEq.approve.call(addressFyh3gIA, uintut23eHR, {from: accounts[0]});
		const uintEMSzCK6 = await Rootkit_financeaFcypEq.allowance.call(addresskEqJLO, addressWTgD9e5, {from: accounts[4]});
		const uint256DvILJbB = await Rootkit_financeaFcypEq.balanceOf.call(addresst9IXKa, {from: accounts[3]});
		const uint256sGTNhh = await Rootkit_financeaFcypEq.balanceOf.call(addressKVyoHa8, {from: accounts[4]});

		assert.equal(boolUd13WgY, false)
		assert.equal(boolrTCJRaP, true)
		assert.equal(uint256DvILJbB, BigInt("0"))
		assert.equal(uint256sGTNhh, BigInt("0"))
		assert.equal(uintEMSzCK6, BigInt("0"))
		assert.equal(uinthJdVvBB, BigInt("0"))
	});
})