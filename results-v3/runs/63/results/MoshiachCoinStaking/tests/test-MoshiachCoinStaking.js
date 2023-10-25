const MoshiachCoinStaking = artifacts.require("MoshiachCoinStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MoshiachCoinStaking', (accounts) => {
	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingcSmOIH5 = await MoshiachCoinStaking.new({from: accounts[1]});
		const uintbnKvJ6o = BigInt("1853")
		const uintyI2AdMq = await MoshiachCoinStakingcSmOIH5.getNumberOfHolders.call({from: accounts[1]});
		const uintAPF1zTC = await MoshiachCoinStakingcSmOIH5.getNumberOfHolders.call({from: accounts[4]});
		const uintiGvtnMj = await MoshiachCoinStakingcSmOIH5.withdraw.call(uintbnKvJ6o, {from: accounts[3]});

		assert.equal(uintAPF1zTC, BigInt("0"))
		assert.equal(uintyI2AdMq, BigInt("0"))
		await expect(MoshiachCoinStakingcSmOIH5.withdraw.call(uintbnKvJ6o, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingD4mq5MU = await MoshiachCoinStaking.new({from: accounts[2]});
		const address6BqDah = accounts[3]
		const uintye1YXrO = BigInt("1879")
		const addressjqqpmbw = accounts[0]
		const addressf96yobs = accounts[0]
		await MoshiachCoinStakingD4mq5MU.claimDivs.call({from: accounts[2]});
		await MoshiachCoinStakingD4mq5MU.onlyOwner.call({from: accounts[4]});
		const uintQleiVZi = await MoshiachCoinStakingD4mq5MU.getPendingDivs.call(address6BqDah, {from: accounts[0]});
		const addressd8xlDJ6 = await MoshiachCoinStakingD4mq5MU.transferAnyERC20Tokens.call(addressf96yobs, addressjqqpmbw, uintye1YXrO, {from: accounts[1]});

		await expect(MoshiachCoinStakingD4mq5MU.claimDivs.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingyc7YGiJ = await MoshiachCoinStaking.new({from: accounts[4]});
		const addressgTeDMY5 = accounts[2]
		const uintWrejAoB = BigInt("566")
		const uint9JecEZ = BigInt("635")
		const uintSnYykEs = await MoshiachCoinStakingyc7YGiJ.getPendingDivs.call(addressgTeDMY5, {from: accounts[0]});
		const uinttJVL2yn = await MoshiachCoinStakingyc7YGiJ.getStakingAndDaoAmount.call({from: "0x0000000000000000000000000000000000000001"});
		const uintb0B39Jb = await MoshiachCoinStakingyc7YGiJ.deposit.call(uintWrejAoB, {from: accounts[4]});
		await MoshiachCoinStakingyc7YGiJ.onlyOwner.call({from: accounts[4]});
		await MoshiachCoinStakingyc7YGiJ.claimDivs.call({from: accounts[1]});
		const uintD076anp = await MoshiachCoinStakingyc7YGiJ.deposit.call(uint9JecEZ, {from: accounts[4]});

		assert.equal(uintSnYykEs, BigInt("0"))
		assert.equal(uinttJVL2yn, BigInt("60000000000000000000000000"))
		await expect(MoshiachCoinStakingyc7YGiJ.deposit.call(uintWrejAoB, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingqLN4jPc = await MoshiachCoinStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const uintCohdUbY = BigInt("158")
		const addressJBwE4PE = accounts[0]
		const uintkhOEXQ7 = BigInt("98")
		const addressJzKVppZ = accounts[0]
		const uintYOq3OZc = await MoshiachCoinStakingqLN4jPc.withdraw.call(uintCohdUbY, {from: accounts[2]});
		const addressKpuwUQZ = await MoshiachCoinStakingqLN4jPc.transferOwnership.call(addressJBwE4PE, {from: accounts[2]});
		const uintDMQRvO = await MoshiachCoinStakingqLN4jPc.deposit.call(uintkhOEXQ7, {from: accounts[0]});
		const uintGePjh92 = await MoshiachCoinStakingqLN4jPc.getStakingAndDaoAmount.call({from: accounts[2]});
		const uintEkxlXox = await MoshiachCoinStakingqLN4jPc.getPendingDivs.call(addressJzKVppZ, {from: accounts[3]});
		await MoshiachCoinStakingqLN4jPc.onlyOwner.call({from: accounts[0]});
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingcrY4yr2 = await MoshiachCoinStaking.new({from: accounts[0]});
		const addresshQdHF1r = accounts[3]
		const addresss1vPJIe = accounts[3]
		const uintDKEO9GL = BigInt("53")
		const addressLrLyLNl = accounts[3]
		const uintTZf6Sob = await MoshiachCoinStakingcrY4yr2.getPendingDivs.call(addresshQdHF1r, {from: accounts[3]});
		const addressaYlaZ4 = await MoshiachCoinStakingcrY4yr2.transferOwnership.call(addresss1vPJIe, {from: accounts[0]});
		const uintKpY15d2 = await MoshiachCoinStakingcrY4yr2.getStakingAndDaoAmount.call({from: accounts[1]});
		const uintYRMaJ0C = await MoshiachCoinStakingcrY4yr2.deposit.call(uintDKEO9GL, {from: "0x0000000000000000000000000000000000000001"});
		const uintnTQKu6P = await MoshiachCoinStakingcrY4yr2.getNumberOfHolders.call({from: accounts[2]});
		const uintVL72NRE = await MoshiachCoinStakingcrY4yr2.getStakingAndDaoAmount.call({from: accounts[3]});
		const uintBq77Q8 = await MoshiachCoinStakingcrY4yr2.getPendingDivs.call(addressLrLyLNl, {from: accounts[4]});

		assert.equal(uintKpY15d2, BigInt("60000000000000000000000000"))
		assert.equal(uintTZf6Sob, BigInt("0"))
		await expect(MoshiachCoinStakingcrY4yr2.deposit.call(uintDKEO9GL, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingCjdFTM8 = await MoshiachCoinStaking.new({from: accounts[4]});
		const addressrWrwALt = accounts[4]
		const uintCLKq6XF = BigInt("1490")
		const address5f3g4H = "0x0000000000000000000000000000000000000001"
		const addressc04IbDh = accounts[4]
		const addressIhbnCia = accounts[1]
		const uintpilAKYV = BigInt("1534")
		const uintGSqlJ9 = BigInt("359")
		const uintqXXzzm6 = await MoshiachCoinStakingCjdFTM8.getPendingDivs.call(addressrWrwALt, {from: "0x0000000000000000000000000000000000000001"});
		const uintxaNOWVX = await MoshiachCoinStakingCjdFTM8.getStakingAndDaoAmount.call({from: "0x0000000000000000000000000000000000000001"});
		const addresshudv9aE = await MoshiachCoinStakingCjdFTM8.transferAnyERC20Tokens.call(addressc04IbDh, address5f3g4H, uintCLKq6XF, {from: accounts[4]});
		await MoshiachCoinStakingCjdFTM8.claimDivs.call({from: accounts[4]});
		const uinti0lU6Y0 = await MoshiachCoinStakingCjdFTM8.getPendingDivs.call(addressIhbnCia, {from: accounts[3]});
		const uintShNsvUw = await MoshiachCoinStakingCjdFTM8.withdraw.call(uintpilAKYV, {from: accounts[1]});
		const uintSIyh1RU = await MoshiachCoinStakingCjdFTM8.withdraw.call(uintGSqlJ9, {from: accounts[1]});
		const uintX9gvxll = await MoshiachCoinStakingCjdFTM8.getStakingAndDaoAmount.call({from: accounts[2]});

		assert.equal(uintqXXzzm6, BigInt("0"))
		assert.equal(uintxaNOWVX, BigInt("60000000000000000000000000"))
		await expect(MoshiachCoinStakingCjdFTM8.transferAnyERC20Tokens.call(addressc04IbDh, address5f3g4H, uintCLKq6XF, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingcrY4yr2 = await MoshiachCoinStaking.new({from: accounts[0]});
		const addressQxbL10A = accounts[3]
		const addressro5OteM = accounts[3]
		const uinth1JOa27 = BigInt("0")
		const uintTZf6Sob = await MoshiachCoinStakingcrY4yr2.getPendingDivs.call(addressQxbL10A, {from: accounts[3]});
		const uintIklvFOW = await MoshiachCoinStakingcrY4yr2.getStakingAndDaoAmount.call({from: accounts[4]});
		const addressaYlaZ4 = await MoshiachCoinStakingcrY4yr2.transferOwnership.call(addressro5OteM, {from: accounts[0]});
		const uintKpY15d2 = await MoshiachCoinStakingcrY4yr2.getStakingAndDaoAmount.call({from: accounts[1]});
		const uintYRMaJ0C = await MoshiachCoinStakingcrY4yr2.deposit.call(uinth1JOa27, {from: "0x0000000000000000000000000000000000000001"});
		const uintnTQKu6P = await MoshiachCoinStakingcrY4yr2.getNumberOfHolders.call({from: accounts[2]});
		const uintVL72NRE = await MoshiachCoinStakingcrY4yr2.getStakingAndDaoAmount.call({from: accounts[3]});

		assert.equal(uintIklvFOW, BigInt("60000000000000000000000000"))
		assert.equal(uintKpY15d2, BigInt("60000000000000000000000000"))
		assert.equal(uintTZf6Sob, BigInt("0"))
		await expect(MoshiachCoinStakingcrY4yr2.deposit.call(uinth1JOa27, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})