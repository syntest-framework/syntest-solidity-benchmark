const EqFinanceStaking = artifacts.require("EqFinanceStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('EqFinanceStaking', (accounts) => {
	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingtibzICP = await EqFinanceStaking.new({from: accounts[4]});
		const uintkqTKbWH = BigInt("609")
		const uintBLP9Taq = BigInt("1117")
		const addressNhNMmR = accounts[3]
		const addressQoXZjQb = accounts[4]
		const uintk2w8qDP = BigInt("378")
		const uintVzQehlX = await EqFinanceStakingtibzICP.getStakingAndDaoAmount.call({from: accounts[1]});
		const uintm40YQJ = await EqFinanceStakingtibzICP.deposit.call(uintkqTKbWH, {from: accounts[0]});
		const address0voBqG = await EqFinanceStakingtibzICP.transferAnyERC20Tokens.call(addressQoXZjQb, addressNhNMmR, uintBLP9Taq, {from: accounts[3]});
		const uintwptgCBg = await EqFinanceStakingtibzICP.getStakingAndDaoAmount.call({from: accounts[3]});
		const uintvYi2E90 = await EqFinanceStakingtibzICP.deposit.call(uintk2w8qDP, {from: accounts[2]});

		assert.equal(uintVzQehlX, BigInt("3000000000000000000000000"))
		await expect(EqFinanceStakingtibzICP.deposit.call(uintkqTKbWH, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingYixlTp = await EqFinanceStaking.new({from: accounts[1]});
		const uintceVDpbg = BigInt("1022")
		const addressW0Zm1p7 = accounts[0]
		const addressmvFalRe = accounts[1]
		const uintOkq3qf = BigInt("1113")
		const uintZys4Sla = await EqFinanceStakingYixlTp.getNumberOfHolders.call({from: accounts[4]});
		const uint7Q0MXd = await EqFinanceStakingYixlTp.deposit.call(uintceVDpbg, {from: accounts[3]});
		const uintKxpeAk = await EqFinanceStakingYixlTp.getPendingDivs.call(addressW0Zm1p7, {from: accounts[0]});
		const uintDL2O9C8 = await EqFinanceStakingYixlTp.getPendingDivs.call(addressmvFalRe, {from: accounts[2]});
		const uintCzqXN9z = await EqFinanceStakingYixlTp.withdraw.call(uintOkq3qf, {from: accounts[4]});

		assert.equal(uintZys4Sla, BigInt("0"))
		await expect(EqFinanceStakingYixlTp.deposit.call(uintceVDpbg, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingrGQh3nv = await EqFinanceStaking.new({from: accounts[0]});
		const addressgrf9KAu = "0x0000000000000000000000000000000000000001"
		const uintCmelXX = BigInt("453")
		const addresss4p1vVE = accounts[0]
		await EqFinanceStakingrGQh3nv.onlyOwner.call({from: accounts[2]});
		const addressXdMy88 = await EqFinanceStakingrGQh3nv.transferOwnership.call(addressgrf9KAu, {from: accounts[0]});
		const uintHAQsErC = await EqFinanceStakingrGQh3nv.withdraw.call(uintCmelXX, {from: accounts[3]});
		const uintTsLfcqD = await EqFinanceStakingrGQh3nv.getPendingDivs.call(addresss4p1vVE, {from: "0x0000000000000000000000000000000000000001"});
		const uinthyxmq5Z = await EqFinanceStakingrGQh3nv.getStakingAndDaoAmount.call({from: accounts[1]});
		await EqFinanceStakingrGQh3nv.claimDivs.call({from: accounts[4]});

		await expect(EqFinanceStakingrGQh3nv.onlyOwner.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingHUA5DQ = await EqFinanceStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const uintwO8h6MQ = BigInt("1861")
		const uintW4FuC1 = BigInt("843")
		const uintKLsHRpg = await EqFinanceStakingHUA5DQ.deposit.call(uintwO8h6MQ, {from: accounts[0]});
		const uintqHQ4Ip6 = await EqFinanceStakingHUA5DQ.deposit.call(uintW4FuC1, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStaking33z8nx = await EqFinanceStaking.new({from: accounts[3]});
		const addressTTKovfz = accounts[1]
		const addressGPAND9 = accounts[1]
		const uintnAxnk8V = BigInt("931")
		const addressXHjR0oc = "0x0000000000000000000000000000000000000001"
		const addressRcipsdM = "0x0000000000000000000000000000000000000001"
		const uintjonJPC6 = BigInt("38")
		const uintMPrJsnq = await EqFinanceStaking33z8nx.getPendingDivs.call(addressTTKovfz, {from: accounts[5]});
		const addressLGrH4YW = await EqFinanceStaking33z8nx.transferOwnership.call(addressGPAND9, {from: accounts[1]});
		const address39x9eC = await EqFinanceStaking33z8nx.transferAnyERC20Tokens.call(addressRcipsdM, addressXHjR0oc, uintnAxnk8V, {from: accounts[0]});
		const uintAFyxln = await EqFinanceStaking33z8nx.deposit.call(uintjonJPC6, {from: accounts[1]});

		assert.equal(uintMPrJsnq, BigInt("0"))
		await expect(EqFinanceStaking33z8nx.transferOwnership.call(addressGPAND9, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingsESOFm6 = await EqFinanceStaking.new({from: accounts[3]});
		const uintPQeTij = BigInt("1342")
		const addressnLkdOk5 = accounts[2]
		const addressJDvq2d = "0x0000000000000000000000000000000000000001"
		await EqFinanceStakingsESOFm6.claimDivs.call({from: accounts[3]});
		await EqFinanceStakingsESOFm6.claimDivs.call({from: accounts[0]});
		const addressgGdmuaH = await EqFinanceStakingsESOFm6.transferAnyERC20Tokens.call(addressJDvq2d, addressnLkdOk5, uintPQeTij, {from: "0x0000000000000000000000000000000000000001"});
		const uintjw0HFAN = await EqFinanceStakingsESOFm6.getNumberOfHolders.call({from: accounts[2]});

		await expect(EqFinanceStakingsESOFm6.claimDivs.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakinggKLYMev = await EqFinanceStaking.new({from: accounts[2]});
		const uintRZTYN1R = BigInt("149")
		await EqFinanceStakinggKLYMev.claimDivs.call({from: accounts[1]});
		const uinttrzazXj = await EqFinanceStakinggKLYMev.withdraw.call(uintRZTYN1R, {from: accounts[0]});
		await EqFinanceStakinggKLYMev.claimDivs.call({from: accounts[2]});

		await expect(EqFinanceStakinggKLYMev.claimDivs.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakinggKLYMev = await EqFinanceStaking.new({from: accounts[2]});
		const addressyrOg5sj = accounts[2]
		const addressFqHN7fi = accounts[4]
		const uintPv1zfdI = BigInt("309")
		const addressuehUJiZ = await EqFinanceStakinggKLYMev.transferOwnership.call(addressyrOg5sj, {from: accounts[2]});
		await EqFinanceStakinggKLYMev.claimDivs.call({from: accounts[1]});
		const uintL9NdPp = await EqFinanceStakinggKLYMev.getPendingDivs.call(addressFqHN7fi, {from: accounts[5]});
		const uintXqS3YG = await EqFinanceStakinggKLYMev.withdraw.call(uintPv1zfdI, {from: accounts[0]});

		await expect(EqFinanceStakinggKLYMev.claimDivs.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakinggKLYMev = await EqFinanceStaking.new({from: accounts[2]});
		const uintfpRkjsr = BigInt("1104")
		const addressVhkJgud = accounts[3]
		const addressGgkHZwt = accounts[1]
		const addressClqrfIe = await EqFinanceStakinggKLYMev.transferAnyERC20Tokens.call(addressGgkHZwt, addressVhkJgud, uintfpRkjsr, {from: accounts[2]});
		await EqFinanceStakinggKLYMev.claimDivs.call({from: accounts[1]});

		await expect(EqFinanceStakinggKLYMev.transferAnyERC20Tokens.call(addressGgkHZwt, addressVhkJgud, uintfpRkjsr, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})