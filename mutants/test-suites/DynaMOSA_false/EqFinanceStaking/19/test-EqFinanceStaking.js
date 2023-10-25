const EqFinanceStaking = artifacts.require("EqFinanceStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('EqFinanceStaking', (accounts) => {
	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingdwR6Iw = await EqFinanceStaking.new({from: accounts[2]});
		const addressZpP9wyW = accounts[3]
		const uintdh6EFJk = BigInt("681")
		const uintWsKFC6f = BigInt("1570")
		const uintmFhW1Yh = await EqFinanceStakingdwR6Iw.getPendingDivs.call(addressZpP9wyW, {from: accounts[4]});
//		const uintjH8MJ4U = await EqFinanceStakingdwR6Iw.deposit.call(uintdh6EFJk, {from: accounts[0]});
//		const uintcSsrRoE = await EqFinanceStakingdwR6Iw.withdraw.call(uintWsKFC6f, {from: accounts[2]});

		assert.equal(uintmFhW1Yh, BigInt("0"))
		await expect(EqFinanceStakingdwR6Iw.deposit.call(uintdh6EFJk, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingcRSHmmU = await EqFinanceStaking.new({from: accounts[4]});
		const addressLUbL72X = accounts[1]
		const uintmFEuXHa = BigInt("831")
		const uintlRATil0 = await EqFinanceStakingcRSHmmU.getNumberOfHolders.call({from: accounts[3]});
//		const addressK06B1aR = await EqFinanceStakingcRSHmmU.transferOwnership.call(addressLUbL72X, {from: accounts[5]});
//		const uintJIuxTXh = await EqFinanceStakingcRSHmmU.deposit.call(uintmFEuXHa, {from: accounts[1]});

		assert.equal(uintlRATil0, BigInt("0"))
		await expect(EqFinanceStakingcRSHmmU.transferOwnership.call(addressLUbL72X, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingb9JqCPG = await EqFinanceStaking.new({from: accounts[1]});
		const addressIbiAPoh = accounts[2]
//		await EqFinanceStakingb9JqCPG.claimDivs.call({from: accounts[1]});
//		await EqFinanceStakingb9JqCPG.claimDivs.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressj4UmxJ = await EqFinanceStakingb9JqCPG.transferOwnership.call(addressIbiAPoh, {from: accounts[4]});

		await expect(EqFinanceStakingb9JqCPG.claimDivs.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingZYqlYak = await EqFinanceStaking.new({from: accounts[1]});
		const addressBVhZgYZ = accounts[4]
		const addressQWSoRLO = accounts[4]
		const uintoIAQw3 = await EqFinanceStakingZYqlYak.getNumberOfHolders.call({from: accounts[3]});
		const uintGXOuhsB = await EqFinanceStakingZYqlYak.getStakingAndDaoAmount.call({from: accounts[1]});
		const uintZrAsb4b = await EqFinanceStakingZYqlYak.getPendingDivs.call(addressBVhZgYZ, {from: accounts[3]});
		const uintoctGQfF = await EqFinanceStakingZYqlYak.getPendingDivs.call(addressQWSoRLO, {from: accounts[0]});
//		await EqFinanceStakingZYqlYak.claimDivs.call({from: accounts[3]});

		assert.equal(uintGXOuhsB, BigInt("3000000000000000000000000"))
		assert.equal(uintZrAsb4b, BigInt("0"))
		assert.equal(uintoIAQw3, BigInt("0"))
		assert.equal(uintoctGQfF, BigInt("0"))
		await expect(EqFinanceStakingZYqlYak.claimDivs.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakinguxn4vtU = await EqFinanceStaking.new({from: accounts[4]});
		const uintNbcpGMu = BigInt("425")
		const addressiKxcF9f = accounts[3]
//		const uintTR7lLm6 = await EqFinanceStakinguxn4vtU.withdraw.call(uintNbcpGMu, {from: accounts[3]});
//		const uintMA8IXeG = await EqFinanceStakinguxn4vtU.getPendingDivs.call(addressiKxcF9f, {from: accounts[4]});
//		const uintXBDgaSr = await EqFinanceStakinguxn4vtU.getStakingAndDaoAmount.call({from: "0x0000000000000000000000000000000000000001"});
//		await EqFinanceStakinguxn4vtU.onlyOwner.call({from: accounts[5]});

		await expect(EqFinanceStakinguxn4vtU.withdraw.call(uintNbcpGMu, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingvSNs2dn = await EqFinanceStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const uintaCrB8X4 = BigInt("1644")
		const addressvBvM62 = accounts[0]
		const addressm6t6eUH = accounts[5]
		const uintwC4D57n = await EqFinanceStakingvSNs2dn.getStakingAndDaoAmount.call({from: accounts[0]});
		const addressbCydKVW = await EqFinanceStakingvSNs2dn.transferAnyERC20Tokens.call(addressm6t6eUH, addressvBvM62, uintaCrB8X4, {from: "0x0000000000000000000000000000000000000001"});
		const uintfpQVgJ6 = await EqFinanceStakingvSNs2dn.getNumberOfHolders.call({from: accounts[3]});
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingdwR6Iw = await EqFinanceStaking.new({from: accounts[2]});
		const addressYGTfrY = accounts[3]
		const uintbcAH2mR = BigInt("681")
		const uintACcLATX = BigInt("1570")
		const uintmFhW1Yh = await EqFinanceStakingdwR6Iw.getPendingDivs.call(addressYGTfrY, {from: accounts[4]});
//		await EqFinanceStakingdwR6Iw.onlyOwner.call({from: accounts[3]});
//		const uintjH8MJ4U = await EqFinanceStakingdwR6Iw.deposit.call(uintbcAH2mR, {from: accounts[0]});
//		const uintcSsrRoE = await EqFinanceStakingdwR6Iw.withdraw.call(uintACcLATX, {from: accounts[2]});

		assert.equal(uintmFhW1Yh, BigInt("0"))
		await expect(EqFinanceStakingdwR6Iw.onlyOwner.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingOpNj8u = await EqFinanceStaking.new({from: accounts[1]});
		const addressYFjBAzx = accounts[1]
		const addressw7RQdbd = accounts[3]
		const uintDKo9M0j = BigInt("371")
		const uintm3eV73T = await EqFinanceStakingOpNj8u.getPendingDivs.call(addressYFjBAzx, {from: accounts[0]});
		const addressfI6ruu = await EqFinanceStakingOpNj8u.transferOwnership.call(addressw7RQdbd, {from: accounts[1]});
		const uintwGL1Y0q = await EqFinanceStakingOpNj8u.getNumberOfHolders.call({from: accounts[4]});
//		const uintP0PcMmE = await EqFinanceStakingOpNj8u.deposit.call(uintDKo9M0j, {from: accounts[2]});

		assert.equal(uintm3eV73T, BigInt("0"))
		assert.equal(uintwGL1Y0q, BigInt("0"))
		await expect(EqFinanceStakingOpNj8u.deposit.call(uintDKo9M0j, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingdwR6Iw = await EqFinanceStaking.new({from: accounts[2]});
		const addressSIFwaym = accounts[3]
		const uintQUWuGsC = BigInt("372")
		const addressDoOsXuC = accounts[3]
		const addressIitEsS = accounts[5]
		const uintx6m8xJ = BigInt("681")
		const uintmFhW1Yh = await EqFinanceStakingdwR6Iw.getPendingDivs.call(addressSIFwaym, {from: accounts[4]});
		const uinte0hPgUK = await EqFinanceStakingdwR6Iw.getStakingAndDaoAmount.call({from: accounts[0]});
//		const addressXmQxPDp = await EqFinanceStakingdwR6Iw.transferAnyERC20Tokens.call(addressIitEsS, addressDoOsXuC, uintQUWuGsC, {from: accounts[2]});
//		const uintjH8MJ4U = await EqFinanceStakingdwR6Iw.deposit.call(uintx6m8xJ, {from: accounts[0]});

		assert.equal(uinte0hPgUK, BigInt("3000000000000000000000000"))
		assert.equal(uintmFhW1Yh, BigInt("0"))
		await expect(EqFinanceStakingdwR6Iw.transferAnyERC20Tokens.call(addressIitEsS, addressDoOsXuC, uintQUWuGsC, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingdwR6Iw = await EqFinanceStaking.new({from: accounts[2]});
		const uintlTAWn16 = BigInt("0")
		const uint4PscMz = BigInt("569")
		const uintpwIvzq3 = await EqFinanceStakingdwR6Iw.getStakingAndDaoAmount.call({from: accounts[3]});
//		const uintyALEwP = await EqFinanceStakingdwR6Iw.deposit.call(uintlTAWn16, {from: accounts[3]});
//		const uinthxPxmGk = await EqFinanceStakingdwR6Iw.deposit.call(uint4PscMz, {from: accounts[3]});

		assert.equal(uintpwIvzq3, BigInt("3000000000000000000000000"))
		await expect(EqFinanceStakingdwR6Iw.deposit.call(uintlTAWn16, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})