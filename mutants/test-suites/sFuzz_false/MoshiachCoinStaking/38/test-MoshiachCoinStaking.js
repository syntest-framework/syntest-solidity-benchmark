const MoshiachCoinStaking = artifacts.require("MoshiachCoinStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MoshiachCoinStaking', (accounts) => {
	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingKJovQm8 = await MoshiachCoinStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const uintVZut5KA = BigInt("726")
		const addressuJPkX4k = accounts[4]
		const addresskQrIX3l = "0x0000000000000000000000000000000000000001"
		const addressxQdMyqY = accounts[0]
		const uintmLS00Zu = BigInt("1115")
		const uintEeRmHY = BigInt("1076")
		const addressullnFUc = await MoshiachCoinStakingKJovQm8.transferAnyERC20Tokens.call(addresskQrIX3l, addressuJPkX4k, uintVZut5KA, {from: accounts[1]});
		const uintYdBnTaA = await MoshiachCoinStakingKJovQm8.getPendingDivs.call(addressxQdMyqY, {from: accounts[3]});
		const uintFm9quJ4 = await MoshiachCoinStakingKJovQm8.deposit.call(uintmLS00Zu, {from: accounts[4]});
		const uintkqYXo2k = await MoshiachCoinStakingKJovQm8.withdraw.call(uintEeRmHY, {from: accounts[3]});
		const uintv2tKXVf = await MoshiachCoinStakingKJovQm8.getStakingAndDaoAmount.call({from: accounts[1]});
		await MoshiachCoinStakingKJovQm8.claimDivs.call({from: accounts[2]});
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingar7lWcg = await MoshiachCoinStaking.new({from: accounts[0]});
		const uintklxey7R = BigInt("1583")
		const uintlnYonHw = BigInt("1137")
//		const uintN04mDJv = await MoshiachCoinStakingar7lWcg.withdraw.call(uintklxey7R, {from: accounts[3]});
//		const uintbBEuCV8 = await MoshiachCoinStakingar7lWcg.deposit.call(uintlnYonHw, {from: accounts[0]});
//		const uint7bhaX5 = await MoshiachCoinStakingar7lWcg.getNumberOfHolders.call({from: accounts[4]});

		await expect(MoshiachCoinStakingar7lWcg.withdraw.call(uintklxey7R, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingR1Axiu8 = await MoshiachCoinStaking.new({from: accounts[1]});
		const uintMumslHa = BigInt("90")
		const addressxJkfwdL = accounts[5]
		const addressY44gvKC = accounts[3]
		const uintFhqtOtp = BigInt("383")
		const addressEPLAna3 = accounts[3]
//		const addressPol4QEi = await MoshiachCoinStakingR1Axiu8.transferAnyERC20Tokens.call(addressY44gvKC, addressxJkfwdL, uintMumslHa, {from: "0x0000000000000000000000000000000000000001"});
//		const uintmUVPnGw = await MoshiachCoinStakingR1Axiu8.withdraw.call(uintFhqtOtp, {from: accounts[1]});
//		const uintH4BPyhf = await MoshiachCoinStakingR1Axiu8.getNumberOfHolders.call({from: accounts[3]});
//		const uintw2PXQ6e = await MoshiachCoinStakingR1Axiu8.getPendingDivs.call(addressEPLAna3, {from: accounts[2]});

		await expect(MoshiachCoinStakingR1Axiu8.transferAnyERC20Tokens.call(addressY44gvKC, addressxJkfwdL, uintMumslHa, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingkRHQRJN = await MoshiachCoinStaking.new({from: accounts[4]});
		const addressQcmmylf = accounts[2]
		const uintaDeE3ip = BigInt("1228")
		const addressMJqJMbi = accounts[1]
		const addressxxENOZo = "0x0000000000000000000000000000000000000001"
		const uintj9kAZYI = BigInt("823")
		const addresss7vOv2D = accounts[2]
		const uintXYJLexL = await MoshiachCoinStakingkRHQRJN.getPendingDivs.call(addressQcmmylf, {from: accounts[4]});
//		const addressYY5UWGG = await MoshiachCoinStakingkRHQRJN.transferAnyERC20Tokens.call(addressxxENOZo, addressMJqJMbi, uintaDeE3ip, {from: accounts[5]});
//		await MoshiachCoinStakingkRHQRJN.onlyOwner.call({from: accounts[4]});
//		const uintMq4tPKy = await MoshiachCoinStakingkRHQRJN.withdraw.call(uintj9kAZYI, {from: accounts[4]});
//		const addressM9WIWNV = await MoshiachCoinStakingkRHQRJN.transferOwnership.call(addresss7vOv2D, {from: accounts[4]});

		assert.equal(uintXYJLexL, BigInt("0"))
		await expect(MoshiachCoinStakingkRHQRJN.transferAnyERC20Tokens.call(addressxxENOZo, addressMJqJMbi, uintaDeE3ip, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingtWhqHyt = await MoshiachCoinStaking.new({from: accounts[4]});
		const uintx8hVwbo = BigInt("697")
		const uintgAanWwU = await MoshiachCoinStakingtWhqHyt.getStakingAndDaoAmount.call({from: accounts[4]});
//		await MoshiachCoinStakingtWhqHyt.onlyOwner.call({from: accounts[1]});
//		const uintzpP7S3T = await MoshiachCoinStakingtWhqHyt.deposit.call(uintx8hVwbo, {from: accounts[3]});

		assert.equal(uintgAanWwU, BigInt("60000000000000000000000000"))
		await expect(MoshiachCoinStakingtWhqHyt.onlyOwner.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingjwLMXw = await MoshiachCoinStaking.new({from: accounts[4]});
		const addressdWcYtLY = accounts[2]
		const addressENH627F = accounts[1]
//		await MoshiachCoinStakingjwLMXw.claimDivs.call({from: accounts[1]});
//		const uinto6pn5Ia = await MoshiachCoinStakingjwLMXw.getStakingAndDaoAmount.call({from: "0x0000000000000000000000000000000000000001"});
//		const uintUjdydVJ = await MoshiachCoinStakingjwLMXw.getStakingAndDaoAmount.call({from: accounts[5]});
//		const addressCrz8zO9 = await MoshiachCoinStakingjwLMXw.transferOwnership.call(addressdWcYtLY, {from: accounts[4]});
//		const uintGW1VCXX = await MoshiachCoinStakingjwLMXw.getStakingAndDaoAmount.call({from: accounts[5]});
//		const addresssTbLK6 = await MoshiachCoinStakingjwLMXw.transferOwnership.call(addressENH627F, {from: accounts[4]});

		await expect(MoshiachCoinStakingjwLMXw.claimDivs.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingaVIcvwB = await MoshiachCoinStaking.new({from: accounts[2]});
		const uintaVeI42u = BigInt("1934")
		const uintBrh7SJ8 = BigInt("1214")
//		const uintNK5KvPI = await MoshiachCoinStakingaVIcvwB.deposit.call(uintaVeI42u, {from: accounts[2]});
//		await MoshiachCoinStakingaVIcvwB.claimDivs.call({from: accounts[3]});
//		const uintJIQBnY = await MoshiachCoinStakingaVIcvwB.getNumberOfHolders.call({from: accounts[1]});
//		const uintWiws4aS = await MoshiachCoinStakingaVIcvwB.withdraw.call(uintBrh7SJ8, {from: accounts[3]});

		await expect(MoshiachCoinStakingaVIcvwB.deposit.call(uintaVeI42u, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingjwLMXw = await MoshiachCoinStaking.new({from: accounts[4]});
		const uintgYZOU4s = BigInt("862")
		const addressHXJol35 = accounts[2]
		const addressiT3Wxkm = accounts[2]
//		await MoshiachCoinStakingjwLMXw.claimDivs.call({from: accounts[1]});
//		const uinto6pn5Ia = await MoshiachCoinStakingjwLMXw.getStakingAndDaoAmount.call({from: "0x0000000000000000000000000000000000000001"});
//		const uintUjdydVJ = await MoshiachCoinStakingjwLMXw.getStakingAndDaoAmount.call({from: accounts[5]});
//		await MoshiachCoinStakingjwLMXw.claimDivs.call({from: accounts[0]});
//		const uintlvYN8ha = await MoshiachCoinStakingjwLMXw.getNumberOfHolders.call({from: accounts[3]});
//		const uintlaqdyW = await MoshiachCoinStakingjwLMXw.withdraw.call(uintgYZOU4s, {from: accounts[2]});
//		const addressCrz8zO9 = await MoshiachCoinStakingjwLMXw.transferOwnership.call(addressHXJol35, {from: accounts[4]});
//		const uintGW1VCXX = await MoshiachCoinStakingjwLMXw.getStakingAndDaoAmount.call({from: accounts[5]});
//		const addresssTbLK6 = await MoshiachCoinStakingjwLMXw.transferOwnership.call(addressiT3Wxkm, {from: accounts[4]});

		await expect(MoshiachCoinStakingjwLMXw.claimDivs.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingdv4Jvu = await MoshiachCoinStaking.new({from: accounts[3]});
		const uintoU9nO1Q = BigInt("1554")
		const addressxZjo8h = accounts[3]
		const addressXxW9nWX = accounts[4]
		const uintPjv5ouW = BigInt("2033")
//		const addressrQOvOOH = await MoshiachCoinStakingdv4Jvu.transferAnyERC20Tokens.call(addressXxW9nWX, addressxZjo8h, uintoU9nO1Q, {from: accounts[3]});
//		await MoshiachCoinStakingdv4Jvu.claimDivs.call({from: accounts[3]});
//		const uintTMnKLBs = await MoshiachCoinStakingdv4Jvu.getStakingAndDaoAmount.call({from: accounts[2]});
//		const uintXkfdzPW = await MoshiachCoinStakingdv4Jvu.deposit.call(uintPjv5ouW, {from: accounts[5]});
//		const uintnGxu4jw = await MoshiachCoinStakingdv4Jvu.getStakingAndDaoAmount.call({from: accounts[3]});

		await expect(MoshiachCoinStakingdv4Jvu.transferAnyERC20Tokens.call(addressXxW9nWX, addressxZjo8h, uintoU9nO1Q, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})