const Straight_Fire_Finance = artifacts.require("Straight_Fire_Finance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Straight_Fire_Finance', (accounts) => {
	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_FinanceG5N5eJE = await Straight_Fire_Finance.new({from: accounts[3]});
		const addressZ8ksRFM = accounts[0]
		const addressdWg3qJ = accounts[5]
		const addressrFrpfyF = accounts[2]
		const uint256lbFCjxR = await Straight_Fire_FinanceG5N5eJE.balanceOf.call(addressZ8ksRFM, {from: accounts[0]});
		const uintI9lafoC = await Straight_Fire_FinanceG5N5eJE.allowance.call(addressrFrpfyF, addressdWg3qJ, {from: accounts[4]});

		assert.equal(uint256lbFCjxR, BigInt("0"))
		assert.equal(uintI9lafoC, BigInt("0"))
	});

	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_Financed7htuZl = await Straight_Fire_Finance.new({from: accounts[1]});
		const uintwltzl07 = BigInt("770")
		const addressnlPrGji = "0x0000000000000000000000000000000000000001"
		const boolvNUgNd4 = await Straight_Fire_Financed7htuZl.approve.call(addressnlPrGji, uintwltzl07, {from: accounts[4]});
		const uint256W0ilzWH = await Straight_Fire_Financed7htuZl.totalSupply.call({from: accounts[0]});

		assert.equal(boolvNUgNd4, true)
		assert.equal(uint256W0ilzWH, BigInt("80000000000000000000000"))
	});

	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_Financehlq58jd = await Straight_Fire_Finance.new({from: "0x0000000000000000000000000000000000000001"});
		const uintdagRHt = BigInt("1187")
		const addressT3XG9d5 = accounts[4]
		const addressRJ6F9gI = accounts[0]
		const uintcgy8eEQ = BigInt("715")
		const addressobkMoYx = accounts[0]
		const addressg7trBc0 = accounts[1]
		const uintP7KhWI3 = BigInt("1622")
		const addressw4IdU8b = accounts[5]
		const uintjjuBpA2 = BigInt("765")
		const addressirCd3Lf = accounts[3]
		const addressUHsq4d = accounts[2]
		const boolusynITF = await Straight_Fire_Financehlq58jd.transferFrom.call(addressRJ6F9gI, addressT3XG9d5, uintdagRHt, {from: accounts[4]});
		const boolOdsePuT = await Straight_Fire_Financehlq58jd.transfer.call(addressobkMoYx, uintcgy8eEQ, {from: accounts[3]});
		const uint256MdXU5Rc = await Straight_Fire_Financehlq58jd.balanceOf.call(addressg7trBc0, {from: accounts[3]});
		const boolALyGMTR = await Straight_Fire_Financehlq58jd.transfer.call(addressw4IdU8b, uintP7KhWI3, {from: accounts[4]});
		const boolWtoQqRE = await Straight_Fire_Financehlq58jd.transferFrom.call(addressUHsq4d, addressirCd3Lf, uintjjuBpA2, {from: accounts[4]});
	});

	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_FinanceN9rlIe = await Straight_Fire_Finance.new({from: accounts[3]});
		const addressnzrv3Xr = accounts[3]
		const addressOoaLcCx = accounts[2]
		const addressewKkwAz = accounts[3]
		const addresst8LvXdF = accounts[0]
		const addressdnWhLEJ = accounts[0]
		const uintfDc7CC = BigInt("1077")
		const address4yFs8C = accounts[5]
		const addressi0cop0j = accounts[1]
		const uintnpqb876 = BigInt("1799")
		const addressvr1jixp = accounts[1]
		const addressamTLDXu = "0x0000000000000000000000000000000000000001"
		const addressBjyUrhG = accounts[1]
		const uint256juJWoAC = await Straight_Fire_FinanceN9rlIe.balanceOf.call(addressnzrv3Xr, {from: accounts[2]});
		const uint2vxhSF = await Straight_Fire_FinanceN9rlIe.allowance.call(addressewKkwAz, addressOoaLcCx, {from: accounts[0]});
		const uintNaRw1F1 = await Straight_Fire_FinanceN9rlIe.allowance.call(addressdnWhLEJ, addresst8LvXdF, {from: accounts[3]});
		const booly95vMgR = await Straight_Fire_FinanceN9rlIe.transferFrom.call(addressi0cop0j, address4yFs8C, uintfDc7CC, {from: accounts[3]});
		const boolL8RbVW0 = await Straight_Fire_FinanceN9rlIe.approve.call(addressvr1jixp, uintnpqb876, {from: accounts[0]});
		const uintrMBEnMZ = await Straight_Fire_FinanceN9rlIe.allowance.call(addressBjyUrhG, addressamTLDXu, {from: accounts[4]});

		assert.equal(boolL8RbVW0, true)
		assert.equal(booly95vMgR, false)
		assert.equal(uint256juJWoAC, BigInt("80000000000000000000000"))
		assert.equal(uint2vxhSF, BigInt("0"))
		assert.equal(uintNaRw1F1, BigInt("0"))
		assert.equal(uintrMBEnMZ, BigInt("0"))
	});

	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_FinanceQb0Q07c = await Straight_Fire_Finance.new({from: accounts[3]});
		const uintosFjRmz = BigInt("856")
		const addressMZbmG1p = accounts[1]
		const addressCcFTlgz = accounts[4]
		const addresskQK6YyT = accounts[0]
		const uintcpdvTRM = BigInt("1957")
		const addressa2Er24j = accounts[3]
		const addressEl7Gz3o = accounts[2]
		const booljRqDL7d = await Straight_Fire_FinanceQb0Q07c.transfer.call(addressMZbmG1p, uintosFjRmz, {from: accounts[2]});
		const uintKhI0GL = await Straight_Fire_FinanceQb0Q07c.allowance.call(addresskQK6YyT, addressCcFTlgz, {from: "0x0000000000000000000000000000000000000001"});
		const uint256GxItyPs = await Straight_Fire_FinanceQb0Q07c.totalSupply.call({from: accounts[1]});
		const boolkOkd1l3 = await Straight_Fire_FinanceQb0Q07c.transferFrom.call(addressEl7Gz3o, addressa2Er24j, uintcpdvTRM, {from: accounts[2]});

		assert.equal(booljRqDL7d, false)
		assert.equal(boolkOkd1l3, false)
		assert.equal(uint256GxItyPs, BigInt("80000000000000000000000"))
		assert.equal(uintKhI0GL, BigInt("0"))
	});
})