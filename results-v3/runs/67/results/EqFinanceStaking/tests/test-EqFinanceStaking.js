const EqFinanceStaking = artifacts.require("EqFinanceStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('EqFinanceStaking', (accounts) => {
	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingSFftL55 = await EqFinanceStaking.new({from: accounts[3]});
		await EqFinanceStakingSFftL55.claimDivs.call({from: accounts[5]});
		await EqFinanceStakingSFftL55.claimDivs.call({from: accounts[2]});

		await expect(EqFinanceStakingSFftL55.claimDivs.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingWNFLCsS = await EqFinanceStaking.new({from: accounts[1]});
		const addressEKYkCzk = accounts[3]
		const addressnjdd7Df = accounts[0]
		const addresscZmrKyF = accounts[3]
		const addresss6iNDAj = await EqFinanceStakingWNFLCsS.transferOwnership.call(addressEKYkCzk, {from: accounts[4]});
		const uintKkCDhm = await EqFinanceStakingWNFLCsS.getStakingAndDaoAmount.call({from: accounts[4]});
		const uintS3gLCiR = await EqFinanceStakingWNFLCsS.getStakingAndDaoAmount.call({from: accounts[0]});
		const addressXD1xMjy = await EqFinanceStakingWNFLCsS.transferOwnership.call(addressnjdd7Df, {from: accounts[2]});
		const uintwKyJtNr = await EqFinanceStakingWNFLCsS.getPendingDivs.call(addresscZmrKyF, {from: accounts[2]});
		const uintIKhprw = await EqFinanceStakingWNFLCsS.getNumberOfHolders.call({from: accounts[2]});

		await expect(EqFinanceStakingWNFLCsS.transferOwnership.call(addressEKYkCzk, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingt4OARgU = await EqFinanceStaking.new({from: accounts[4]});
		const uintyBIVkH = await EqFinanceStakingt4OARgU.getNumberOfHolders.call({from: accounts[4]});
		const uinthDdEe6m = await EqFinanceStakingt4OARgU.getStakingAndDaoAmount.call({from: accounts[4]});
		await EqFinanceStakingt4OARgU.claimDivs.call({from: accounts[0]});

		assert.equal(uinthDdEe6m, BigInt("3000000000000000000000000"))
		assert.equal(uintyBIVkH, BigInt("0"))
		await expect(EqFinanceStakingt4OARgU.claimDivs.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingcnLvdm = await EqFinanceStaking.new({from: accounts[1]});
		const uintnWaqG1J = BigInt("869")
		const uintwNIw5rs = BigInt("821")
		const addressG36eBtU = accounts[0]
		const addressvxKrUap = accounts[1]
		const uintKWm2Kf = await EqFinanceStakingcnLvdm.withdraw.call(uintnWaqG1J, {from: accounts[4]});
		await EqFinanceStakingcnLvdm.onlyOwner.call({from: accounts[4]});
		await EqFinanceStakingcnLvdm.onlyOwner.call({from: accounts[3]});
		const addressstYTVD3 = await EqFinanceStakingcnLvdm.transferAnyERC20Tokens.call(addressvxKrUap, addressG36eBtU, uintwNIw5rs, {from: accounts[0]});
		const uintZO8kVg = await EqFinanceStakingcnLvdm.getNumberOfHolders.call({from: accounts[3]});

		await expect(EqFinanceStakingcnLvdm.withdraw.call(uintnWaqG1J, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingCvqSxCZ = await EqFinanceStaking.new({from: accounts[5]});
		const uintAaD685Q = BigInt("1980")
		const addressdF3k1CF = accounts[3]
		const addresszBUBe5 = accounts[2]
		await EqFinanceStakingCvqSxCZ.claimDivs.call({from: accounts[2]});
		const uintfFCRfQ = await EqFinanceStakingCvqSxCZ.deposit.call(uintAaD685Q, {from: accounts[4]});
		const uintzOx1Cg = await EqFinanceStakingCvqSxCZ.getPendingDivs.call(addressdF3k1CF, {from: accounts[2]});
		const uintOMoTaL7 = await EqFinanceStakingCvqSxCZ.getPendingDivs.call(addresszBUBe5, {from: accounts[3]});

		await expect(EqFinanceStakingCvqSxCZ.claimDivs.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingg2XtEA7 = await EqFinanceStaking.new({from: accounts[3]});
		await EqFinanceStakingg2XtEA7.onlyOwner.call({from: accounts[0]});
		const uintBWQAFmg = await EqFinanceStakingg2XtEA7.getStakingAndDaoAmount.call({from: accounts[3]});

		await expect(EqFinanceStakingg2XtEA7.onlyOwner.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingCkVGb7o = await EqFinanceStaking.new({from: accounts[4]});
		const uintOGfkzH = BigInt("1625")
		const addressjyk0Ili = accounts[1]
		const addressumlO4oh = accounts[0]
		const uintkG1J5GX = BigInt("745")
		const addressOFzxRZa = accounts[1]
		const uintSD8KTs = BigInt("1362")
		const addresswgDe4gv = await EqFinanceStakingCkVGb7o.transferAnyERC20Tokens.call(addressumlO4oh, addressjyk0Ili, uintOGfkzH, {from: accounts[4]});
		const uintiLyAZAB = await EqFinanceStakingCkVGb7o.withdraw.call(uintkG1J5GX, {from: "0x0000000000000000000000000000000000000001"});
		const uintFX0e79K = await EqFinanceStakingCkVGb7o.getPendingDivs.call(addressOFzxRZa, {from: accounts[2]});
		const uintp7BeQs = await EqFinanceStakingCkVGb7o.deposit.call(uintSD8KTs, {from: accounts[2]});
		const uintO5PaEPY = await EqFinanceStakingCkVGb7o.getStakingAndDaoAmount.call({from: accounts[5]});

		await expect(EqFinanceStakingCkVGb7o.transferAnyERC20Tokens.call(addressumlO4oh, addressjyk0Ili, uintOGfkzH, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingzfivHDd = await EqFinanceStaking.new({from: accounts[3]});
		const addressPNjjGze = accounts[3]
		const uintBegoA6S = BigInt("382")
		await EqFinanceStakingzfivHDd.claimDivs.call({from: accounts[3]});
		const uintan6ThAm = await EqFinanceStakingzfivHDd.getNumberOfHolders.call({from: accounts[0]});
		const addresssmL2g4q = await EqFinanceStakingzfivHDd.transferOwnership.call(addressPNjjGze, {from: accounts[3]});
		const uintj7qvPlX = await EqFinanceStakingzfivHDd.deposit.call(uintBegoA6S, {from: accounts[5]});

		await expect(EqFinanceStakingzfivHDd.claimDivs.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingLiosojY = await EqFinanceStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const uintntXti9h = BigInt("142")
		const addressJS0fuL8 = accounts[3]
		const addresshvy81DW = accounts[5]
		const uintqn4ucO = await EqFinanceStakingLiosojY.deposit.call(uintntXti9h, {from: accounts[2]});
		const addressvtMsC5B = await EqFinanceStakingLiosojY.transferOwnership.call(addressJS0fuL8, {from: accounts[1]});
		await EqFinanceStakingLiosojY.claimDivs.call({from: accounts[1]});
		const addressW994Yy3 = await EqFinanceStakingLiosojY.transferOwnership.call(addresshvy81DW, {from: accounts[0]});
		await EqFinanceStakingLiosojY.claimDivs.call({from: accounts[1]});
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakinggvTMEzx = await EqFinanceStaking.new({from: accounts[0]});
		const addressYYcDjbU = accounts[0]
		const uintHajT6Ko = BigInt("0")
		const uintcKNk8SS = BigInt("346")
		const addressdeDO4YR = accounts[0]
		const addresstrhjnj = accounts[5]
		const uintG9jVB5R = BigInt("479")
		const addressWQPvOQk = accounts[4]
		const uintG50EDkz = await EqFinanceStakinggvTMEzx.getPendingDivs.call(addressYYcDjbU, {from: accounts[3]});
		const uintI8xQmkb = await EqFinanceStakinggvTMEzx.getStakingAndDaoAmount.call({from: accounts[2]});
		await EqFinanceStakinggvTMEzx.claimDivs.call({from: "0x0000000000000000000000000000000000000001"});
		const uintV8qbBuj = await EqFinanceStakinggvTMEzx.deposit.call(uintHajT6Ko, {from: accounts[1]});
		const addresstqNHHDh = await EqFinanceStakinggvTMEzx.transferAnyERC20Tokens.call(addresstrhjnj, addressdeDO4YR, uintcKNk8SS, {from: "0x0000000000000000000000000000000000000001"});
		const uinta9ObRJm = await EqFinanceStakinggvTMEzx.deposit.call(uintG9jVB5R, {from: accounts[1]});
		const uintXxHmLq = await EqFinanceStakinggvTMEzx.getPendingDivs.call(addressWQPvOQk, {from: accounts[4]});

		assert.equal(uintG50EDkz, BigInt("0"))
		assert.equal(uintI8xQmkb, BigInt("3000000000000000000000000"))
		await expect(EqFinanceStakinggvTMEzx.claimDivs.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingsxVkaTR = await EqFinanceStaking.new({from: accounts[1]});
		const addressLJt3pU = accounts[2]
		const addressGZwKumJ = accounts[5]
		const uintLqCljld = BigInt("1664")
		const addressQ6TSszx = accounts[10]
		const addressdHXYsJ = "0x0000000000000000000000000000000000000000"
		const uintFYYI3LJ = BigInt("1685")
		const uintbbv0Kko = await EqFinanceStakingsxVkaTR.getStakingAndDaoAmount.call({from: accounts[3]});
		const uints5f2Zoi = await EqFinanceStakingsxVkaTR.getPendingDivs.call(addressLJt3pU, {from: accounts[4]});
		await EqFinanceStakingsxVkaTR.claimDivs.call({from: accounts[1]});
		await EqFinanceStakingsxVkaTR.claimDivs.call({from: accounts[1]});
		await EqFinanceStakingsxVkaTR.claimDivs.call({from: accounts[3]});
		const uintWimzyxl = await EqFinanceStakingsxVkaTR.getNumberOfHolders.call({from: accounts[1]});
		const addressAp3M02 = await EqFinanceStakingsxVkaTR.transferOwnership.call(addressGZwKumJ, {from: accounts[1]});
		const addresscVfw15K = await EqFinanceStakingsxVkaTR.transferAnyERC20Tokens.call(addressdHXYsJ, addressQ6TSszx, uintLqCljld, {from: accounts[1]});
		const uintJ6nIQ8m = await EqFinanceStakingsxVkaTR.getStakingAndDaoAmount.call({from: accounts[1]});
		const uintYJ8k4W = await EqFinanceStakingsxVkaTR.withdraw.call(uintFYYI3LJ, {from: accounts[2]});
		await EqFinanceStakingsxVkaTR.claimDivs.call({from: accounts[4]});
		const uintnuZuIv5 = await EqFinanceStakingsxVkaTR.getNumberOfHolders.call({from: accounts[4]});

		assert.equal(uintbbv0Kko, BigInt("3000000000000000000000000"))
		assert.equal(uints5f2Zoi, BigInt("0"))
		await expect(EqFinanceStakingsxVkaTR.claimDivs.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});
})