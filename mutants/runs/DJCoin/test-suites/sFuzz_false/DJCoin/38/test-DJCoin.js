const DJCoin = artifacts.require("DJCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DJCoin', (accounts) => {
	it('test for DJCoin', async () => {
		const DJCoinmeZX4S4 = await DJCoin.new({from: accounts[2]});
		const uintaQaa7cr = BigInt("1910")
		const addressHVHYYLR = accounts[3]
		const addressx2PLFri = accounts[3]
		const uintDwgaJfy = BigInt("1490")
		const addressCAsOvJ = accounts[1]
		const boolJI6UjT9 = await DJCoinmeZX4S4.decreaseAllowance.call(addressHVHYYLR, uintaQaa7cr, {from: accounts[0]});
		const addressO52wvFx = await DJCoinmeZX4S4.transferOwnership.call(addressx2PLFri, {from: accounts[3]});
		const boolH6VCIk = await DJCoinmeZX4S4.transfer.call(addressCAsOvJ, uintDwgaJfy, {from: accounts[2]});
		await DJCoinmeZX4S4.onlyOwner.call({from: accounts[3]});

		assert.equal(boolJI6UjT9, true)
		await expect(DJCoinmeZX4S4.transferOwnership.call(addressx2PLFri, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinQG85CH = await DJCoin.new({from: accounts[4]});
		const uintN2q7GF = BigInt("1026")
		const addressdg4b4jD = accounts[1]
		const addressiEmzXKs = accounts[0]
		const addressLJddWtj = accounts[3]
		const addressbl2SKgt = accounts[0]
		const boolhC27bY0 = await DJCoinQG85CH.transfer.call(addressdg4b4jD, uintN2q7GF, {from: accounts[4]});
		const addressZvq58SZ = await DJCoinQG85CH.validRecipient.call(addressiEmzXKs, {from: accounts[3]});
		const uint256iezmKZ7 = await DJCoinQG85CH.balanceOf.call(addressLJddWtj, {from: "0x0000000000000000000000000000000000000001"});
		const uint256HPwWhPe = await DJCoinQG85CH.totalSupply.call({from: accounts[2]});
		const addressgxJ77tS = await DJCoinQG85CH.validRecipient.call(addressbl2SKgt, {from: accounts[3]});

		assert.equal(boolhC27bY0, true)
		await expect(DJCoinQG85CH.validRecipient.call(addressiEmzXKs, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoineeHF831 = await DJCoin.new({from: accounts[5]});
		const uintC3qumd = BigInt("1097")
		const addressdtJkvBk = accounts[4]
		const uintzVxgvS = BigInt("1247")
		const addressh9EQH0H = accounts[0]
		const addressaCgcxGl = "0x0000000000000000000000000000000000000001"
		const uint256HD9tkWa = await DJCoineeHF831.totalSupply.call({from: accounts[2]});
		const boolBwgYGzL = await DJCoineeHF831.decreaseAllowance.call(addressdtJkvBk, uintC3qumd, {from: "0x0000000000000000000000000000000000000001"});
		const boolydjdlZA = await DJCoineeHF831.approve.call(addressh9EQH0H, uintzVxgvS, {from: accounts[3]});
		const addressMkRDqPD = await DJCoineeHF831.validRecipient.call(addressaCgcxGl, {from: accounts[4]});

		assert.equal(boolBwgYGzL, true)
		assert.equal(boolydjdlZA, true)
		assert.equal(uint256HD9tkWa, BigInt("2100000000000"))
		await expect(DJCoineeHF831.validRecipient.call(addressaCgcxGl, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinDH9I77C = await DJCoin.new({from: accounts[3]});
		const uintdP72ofM = BigInt("1710")
		const addressvnuQddu = "0x0000000000000000000000000000000000000001"
		const uintC19k5tn = BigInt("530")
		const addressZI3Z9Rq = accounts[4]
		const addressoLkH8U4 = accounts[5]
		const addressOrM07N = await DJCoinDH9I77C.owner.call({from: accounts[5]});
		const boolchNoZM = await DJCoinDH9I77C.approve.call(addressvnuQddu, uintdP72ofM, {from: accounts[3]});
		await DJCoinDH9I77C.renounceOwnership.call({from: accounts[2]});
		const booleiivgJ = await DJCoinDH9I77C.transferFrom.call(addressoLkH8U4, addressZI3Z9Rq, uintC19k5tn, {from: accounts[4]});

		assert.equal(addressOrM07N, 0x2D409A4C3a627C3846A4254CF33a480E034e79E4)
		assert.equal(boolchNoZM, true)
		await expect(DJCoinDH9I77C.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinoAnVyi = await DJCoin.new({from: accounts[3]});
		const uintn17fFw = BigInt("508")
		const addressaMIUHU = accounts[4]
		const uintloLnZnl = BigInt("1610")
		const boolCR7GnGP = await DJCoinoAnVyi.transfer.call(addressaMIUHU, uintn17fFw, {from: accounts[1]});
		const boolIqWVNrC = await DJCoinoAnVyi.changetokensPerBlock.call(uintloLnZnl, {from: accounts[0]});

		await expect(DJCoinoAnVyi.transfer.call(addressaMIUHU, uintn17fFw, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinoAnVyi = await DJCoin.new({from: accounts[3]});
		const uintNdxrUFF = BigInt("999")
		const boolIqWVNrC = await DJCoinoAnVyi.changetokensPerBlock.call(uintNdxrUFF, {from: accounts[0]});

		assert.equal(boolIqWVNrC, true)
	});

	it('test for DJCoin', async () => {
		const DJCoinoAnVyi = await DJCoin.new({from: accounts[3]});
		const addressyIAU9fI = accounts[0]
		const addressDc8V6rd = accounts[3]
		const uintRwkjngL = BigInt("508")
		const addressAYLGnGU = accounts[5]
		const uintKOZDWvv = BigInt("1610")
		const uintCU3keH = BigInt("1792")
		const addressEQGQbRp = accounts[2]
		const uint256vGe3WNI = await DJCoinoAnVyi.allowance.call(addressDc8V6rd, addressyIAU9fI, {from: accounts[4]});
		const boolCR7GnGP = await DJCoinoAnVyi.transfer.call(addressAYLGnGU, uintRwkjngL, {from: accounts[1]});
		const boolIqWVNrC = await DJCoinoAnVyi.changetokensPerBlock.call(uintKOZDWvv, {from: accounts[0]});
		const boolndavbcC = await DJCoinoAnVyi.increaseAllowance.call(addressEQGQbRp, uintCU3keH, {from: accounts[0]});

		assert.equal(uint256vGe3WNI, BigInt("0"))
		await expect(DJCoinoAnVyi.transfer.call(addressAYLGnGU, uintRwkjngL, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinXqlqpvU = await DJCoin.new({from: accounts[4]});
		const addresscCGr5YL = accounts[3]
		const addressw48GPHi = "0x0000000000000000000000000000000000000001"
		const uint256JyIbITF = await DJCoinXqlqpvU.totalSupply.call({from: accounts[1]});
		const uint256zXXr9e1 = await DJCoinXqlqpvU.balanceOf.call(addresscCGr5YL, {from: accounts[0]});
		const uint256rWyAzEr = await DJCoinXqlqpvU.totalSupply.call({from: accounts[3]});
		const addressPHnT0xq = await DJCoinXqlqpvU.validRecipient.call(addressw48GPHi, {from: accounts[4]});

		assert.equal(uint256JyIbITF, BigInt("2100000000000"))
		assert.equal(uint256rWyAzEr, BigInt("2100000000000"))
		assert.equal(uint256zXXr9e1, BigInt("0"))
		await expect(DJCoinXqlqpvU.validRecipient.call(addressw48GPHi, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinoAnVyi = await DJCoin.new({from: accounts[3]});
		const uintl28KX4M = BigInt("105")
		const addressO9pKnGv = accounts[1]
		const uintNpEMCiU = BigInt("501")
		const addressuvVo2ME = accounts[4]
		const addressNozgT2 = accounts[2]
		const boolqToPUyz = await DJCoinoAnVyi.increaseAllowance.call(addressO9pKnGv, uintl28KX4M, {from: accounts[5]});
		const boolCR7GnGP = await DJCoinoAnVyi.transfer.call(addressuvVo2ME, uintNpEMCiU, {from: accounts[1]});
		const uint256IhUgKta = await DJCoinoAnVyi.balanceOf.call(addressNozgT2, {from: accounts[2]});

		assert.equal(boolqToPUyz, true)
		await expect(DJCoinoAnVyi.transfer.call(addressuvVo2ME, uintNpEMCiU, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinkFbKkn = await DJCoin.new({from: accounts[5]});
		const uintziLjUIH = BigInt("869")
		const address6PLcM1 = accounts[5]
		const uintcMPbQs8 = BigInt("81")
		const address2IJJFH = accounts[3]
		const addressZcx9WMy = await DJCoinkFbKkn.owner.call({from: accounts[0]});
		const boolov26w6o = await DJCoinkFbKkn.approve.call(address6PLcM1, uintziLjUIH, {from: accounts[2]});
		await DJCoinkFbKkn.renounceOwnership.call({from: accounts[5]});
		const boolnbCibAB = await DJCoinkFbKkn.transfer.call(address2IJJFH, uintcMPbQs8, {from: accounts[1]});

		assert.equal(addressZcx9WMy, 0x6f9BB5e09DB7D8daffA8eCFd106a80f7f8b2FDa9)
		assert.equal(boolov26w6o, true)
		await expect(DJCoinkFbKkn.renounceOwnership.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinoAnVyi = await DJCoin.new({from: accounts[3]});
		const uintOPyJzw6 = BigInt("1733")
		const addressq4z3Y0c = accounts[0]
		const addresszfdhZIi = accounts[0]
		const uintcX9bpSt = BigInt("977")
		const boolMY0IFnm = await DJCoinoAnVyi.transferFrom.call(addresszfdhZIi, addressq4z3Y0c, uintOPyJzw6, {from: accounts[1]});
		const boolIqWVNrC = await DJCoinoAnVyi.changetokensPerBlock.call(uintcX9bpSt, {from: accounts[0]});

		await expect(DJCoinoAnVyi.transferFrom.call(addresszfdhZIi, addressq4z3Y0c, uintOPyJzw6, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinoAnVyi = await DJCoin.new({from: accounts[3]});
		const uintGcRDN25 = BigInt("999")
		const addressonqu4d = "0x0000000000000000000000000000000000000001"
		const boolIqWVNrC = await DJCoinoAnVyi.changetokensPerBlock.call(uintGcRDN25, {from: accounts[0]});
		const addressAj67wg3 = await DJCoinoAnVyi.transferOwnership.call(addressonqu4d, {from: accounts[3]});

		assert.equal(boolIqWVNrC, true)
	});

	it('test for DJCoin', async () => {
		const DJCoinoAnVyi = await DJCoin.new({from: accounts[3]});
		const uintDWhZYsD = BigInt("62")
		const uintcSLn7rB = BigInt("53")
		const uintDhPN7jX = BigInt("1858")
		const uinthgBTS6z = BigInt("2018")
		const addressWxtXSS = accounts[5]
		const uintlQMfhl = BigInt("1182")
		const addresszPlVSlE = accounts[1]
		const boolIqWVNrC = await DJCoinoAnVyi.changetokensPerBlock.call(uintDWhZYsD, {from: accounts[0]});
		const uint256RrvnZ6g = await DJCoinoAnVyi.burn.call(uintDhPN7jX, uintcSLn7rB, {from: accounts[3]});
		const boolog9mnuC = await DJCoinoAnVyi.approve.call(addressWxtXSS, uinthgBTS6z, {from: accounts[3]});
		const boolmrxTKHd = await DJCoinoAnVyi.approve.call(addresszPlVSlE, uintlQMfhl, {from: accounts[3]});
		await DJCoinoAnVyi.renounceOwnership.call({from: accounts[3]});

		assert.equal(boolIqWVNrC, true)
		assert.equal(boolmrxTKHd, true)
		assert.equal(boolog9mnuC, true)
		assert.equal(uint256RrvnZ6g, BigInt("2088870000000"))
		await expect(DJCoinoAnVyi.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinkFbKkn = await DJCoin.new({from: accounts[5]});
		const uint1bI0mu = BigInt("0")
		const addresstccmSm = accounts[4]
		const addressyqA40gj = accounts[3]
		const boolnbCibAB = await DJCoinkFbKkn.transfer.call(addresstccmSm, uint1bI0mu, {from: accounts[1]});
		const addressJo2BD0j = await DJCoinkFbKkn.transferOwnership.call(addressyqA40gj, {from: accounts[2]});

		assert.equal(boolnbCibAB, true)
		await expect(DJCoinkFbKkn.transferOwnership.call(addressyqA40gj, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinJQB8vmQ = await DJCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const uintmvuR9WW = BigInt("446")
		const addresssEt6oQz = accounts[0]
		const uintFb5dLS1 = BigInt("79")
		const addressAsd7hjZ = accounts[4]
		const uintNJozgCb = BigInt("1214")
		const addressRKifVc7 = accounts[0]
		const boolmjquWgb = await DJCoinJQB8vmQ.transfer.call(addresssEt6oQz, uintmvuR9WW, {from: accounts[3]});
		await DJCoinJQB8vmQ.renounceOwnership.call({from: accounts[3]});
		const boolBghfBOE = await DJCoinJQB8vmQ.transfer.call(addressAsd7hjZ, uintFb5dLS1, {from: accounts[3]});
		const boolfk15FE = await DJCoinJQB8vmQ.approve.call(addressRKifVc7, uintNJozgCb, {from: accounts[1]});
	});
})