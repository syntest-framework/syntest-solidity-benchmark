const MoshiachCoinStaking = artifacts.require("MoshiachCoinStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MoshiachCoinStaking', (accounts) => {
	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingRqbpRhX = await MoshiachCoinStaking.new({from: accounts[5]});
		const uintTosu7ki = BigInt("804")
		const uinthczMJV5 = BigInt("268")
		const addressU5I32eZ = accounts[5]
		const addressMjpGh6n = accounts[1]
		const addressHhM9GN = accounts[0]
		const uint3X3hMv = await MoshiachCoinStakingRqbpRhX.getStakingAndDaoAmount.call({from: "0x0000000000000000000000000000000000000001"});
//		const uintqk2KNVU = await MoshiachCoinStakingRqbpRhX.deposit.call(uintTosu7ki, {from: "0x0000000000000000000000000000000000000001"});
//		const uintW7qnp2 = await MoshiachCoinStakingRqbpRhX.deposit.call(uinthczMJV5, {from: accounts[2]});
//		const uintWij8p0 = await MoshiachCoinStakingRqbpRhX.getPendingDivs.call(addressU5I32eZ, {from: accounts[2]});
//		const addressCygOlOF = await MoshiachCoinStakingRqbpRhX.transferOwnership.call(addressMjpGh6n, {from: accounts[4]});
//		const uintxQ4R8eU = await MoshiachCoinStakingRqbpRhX.getPendingDivs.call(addressHhM9GN, {from: accounts[2]});

		assert.equal(uint3X3hMv, BigInt("60000000000000000000000000"))
		await expect(MoshiachCoinStakingRqbpRhX.deposit.call(uintTosu7ki, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingBx8lbpc = await MoshiachCoinStaking.new({from: accounts[2]});
		const uintTB3wrF9 = BigInt("879")
//		const uintF99tQfa = await MoshiachCoinStakingBx8lbpc.withdraw.call(uintTB3wrF9, {from: accounts[1]});
//		const uintkCoikR = await MoshiachCoinStakingBx8lbpc.getStakingAndDaoAmount.call({from: accounts[1]});

		await expect(MoshiachCoinStakingBx8lbpc.withdraw.call(uintTB3wrF9, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingoc0dfwQ = await MoshiachCoinStaking.new({from: accounts[5]});
		const addressjvv0EN1 = accounts[0]
		const addressYwePTNJ = accounts[2]
		const uintla7h8h1 = await MoshiachCoinStakingoc0dfwQ.getPendingDivs.call(addressjvv0EN1, {from: accounts[1]});
		const uintCPurA8D = await MoshiachCoinStakingoc0dfwQ.getPendingDivs.call(addressYwePTNJ, {from: "0x0000000000000000000000000000000000000001"});
//		await MoshiachCoinStakingoc0dfwQ.onlyOwner.call({from: accounts[0]});

		assert.equal(uintCPurA8D, BigInt("0"))
		assert.equal(uintla7h8h1, BigInt("0"))
		await expect(MoshiachCoinStakingoc0dfwQ.onlyOwner.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingu2YixJy = await MoshiachCoinStaking.new({from: accounts[2]});
		const uintMA5in6C = BigInt("1938")
//		await MoshiachCoinStakingu2YixJy.claimDivs.call({from: "0x0000000000000000000000000000000000000001"});
//		const uintT5o3bSH = await MoshiachCoinStakingu2YixJy.getNumberOfHolders.call({from: accounts[2]});
//		const uinteBqQ5Kr = await MoshiachCoinStakingu2YixJy.getNumberOfHolders.call({from: "0x0000000000000000000000000000000000000001"});
//		const uintKTBZcWL = await MoshiachCoinStakingu2YixJy.deposit.call(uintMA5in6C, {from: accounts[3]});
//		await MoshiachCoinStakingu2YixJy.onlyOwner.call({from: accounts[3]});

		await expect(MoshiachCoinStakingu2YixJy.claimDivs.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingYDkgM63 = await MoshiachCoinStaking.new({from: accounts[3]});
		const uintKG7aGkC = BigInt("906")
		const address75NvP9 = accounts[1]
		const address9OUOkA = accounts[0]
		const uintELluIRM = BigInt("882")
		const addressLyOvuWf = accounts[1]
		const addressJHJHRw8 = accounts[0]
		const uintAHQKRCv = BigInt("1797")
//		const addressNBC2vQF = await MoshiachCoinStakingYDkgM63.transferAnyERC20Tokens.call(address9OUOkA, address75NvP9, uintKG7aGkC, {from: accounts[3]});
//		const addressmgbogsy = await MoshiachCoinStakingYDkgM63.transferAnyERC20Tokens.call(addressJHJHRw8, addressLyOvuWf, uintELluIRM, {from: accounts[3]});
//		const uintHz0o96n = await MoshiachCoinStakingYDkgM63.withdraw.call(uintAHQKRCv, {from: accounts[3]});
//		await MoshiachCoinStakingYDkgM63.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(MoshiachCoinStakingYDkgM63.transferAnyERC20Tokens.call(address9OUOkA, address75NvP9, uintKG7aGkC, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingM6GX9SJ = await MoshiachCoinStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const uintLTUT91a = BigInt("524")
		const addressUsvcfIg = accounts[4]
		const uintRXpLarQ = await MoshiachCoinStakingM6GX9SJ.withdraw.call(uintLTUT91a, {from: "0x0000000000000000000000000000000000000001"});
		await MoshiachCoinStakingM6GX9SJ.claimDivs.call({from: accounts[4]});
		const uintcjNzIew = await MoshiachCoinStakingM6GX9SJ.getNumberOfHolders.call({from: accounts[0]});
		await MoshiachCoinStakingM6GX9SJ.onlyOwner.call({from: accounts[2]});
		const uintIFImiG6 = await MoshiachCoinStakingM6GX9SJ.getNumberOfHolders.call({from: accounts[0]});
		const addressKa8etQR = await MoshiachCoinStakingM6GX9SJ.transferOwnership.call(addressUsvcfIg, {from: accounts[2]});
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingu2YixJy = await MoshiachCoinStaking.new({from: accounts[2]});
		const addressnbz6nhh = accounts[1]
		const uintyPCHV3N = BigInt("614")
		const uintLkiz1yI = BigInt("1084")
		const addressC8BBv0i = "0x0000000000000000000000000000000000000001"
		const addressCGJV7b7 = accounts[3]
		const addressUGwwBSa = await MoshiachCoinStakingu2YixJy.transferOwnership.call(addressnbz6nhh, {from: accounts[2]});
//		const uinth3lAXpO = await MoshiachCoinStakingu2YixJy.deposit.call(uintyPCHV3N, {from: accounts[1]});
//		await MoshiachCoinStakingu2YixJy.claimDivs.call({from: "0x0000000000000000000000000000000000000001"});
//		const uintT5o3bSH = await MoshiachCoinStakingu2YixJy.getNumberOfHolders.call({from: accounts[2]});
//		const uinteBqQ5Kr = await MoshiachCoinStakingu2YixJy.getNumberOfHolders.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressOGWFw0o = await MoshiachCoinStakingu2YixJy.transferAnyERC20Tokens.call(addressCGJV7b7, addressC8BBv0i, uintLkiz1yI, {from: accounts[3]});
//		await MoshiachCoinStakingu2YixJy.onlyOwner.call({from: accounts[3]});

		await expect(MoshiachCoinStakingu2YixJy.deposit.call(uintyPCHV3N, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingu2YixJy = await MoshiachCoinStaking.new({from: accounts[2]});
		const uintGzuW1Ah = BigInt("0")
		const addresszXh20ZZ = accounts[3]
		const uintphUMznK = await MoshiachCoinStakingu2YixJy.getStakingAndDaoAmount.call({from: accounts[1]});
		const uintbYbTmHj = await MoshiachCoinStakingu2YixJy.getStakingAndDaoAmount.call({from: accounts[2]});
//		const uintzSkTilu = await MoshiachCoinStakingu2YixJy.deposit.call(uintGzuW1Ah, {from: accounts[3]});
//		const uintTpaOQX2 = await MoshiachCoinStakingu2YixJy.getNumberOfHolders.call({from: accounts[3]});
//		const uintHyEkWrw = await MoshiachCoinStakingu2YixJy.getStakingAndDaoAmount.call({from: accounts[4]});
//		const uintsn0UrAE = await MoshiachCoinStakingu2YixJy.getPendingDivs.call(addresszXh20ZZ, {from: accounts[1]});

		assert.equal(uintbYbTmHj, BigInt("60000000000000000000000000"))
		assert.equal(uintphUMznK, BigInt("60000000000000000000000000"))
		await expect(MoshiachCoinStakingu2YixJy.deposit.call(uintGzuW1Ah, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})