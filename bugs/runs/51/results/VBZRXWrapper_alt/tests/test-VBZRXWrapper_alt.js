const VBZRXWrapper_alt = artifacts.require("VBZRXWrapper_alt");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('VBZRXWrapper_alt', (accounts) => {
	it('test for VBZRXWrapper_alt', async () => {
		const contractq7N9znM = await VBZRXWrapper_alt.new({from: accounts[3]});
		const value58I3wm = BigInt("1807")
		await contractq7N9znM.withdraw.call(value58I3wm, {from: accounts[0]});
		await contractq7N9znM.exit.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(contractq7N9znM.withdraw.call(value58I3wm, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractBKoYSYh = await VBZRXWrapper_alt.new({from: accounts[0]});
		const valueanXJB3 = BigInt("32")
		const dstmFCM2Or = accounts[0]
		const srcvAJgFBI = accounts[3]
		const valueimSwqZU = BigInt("891")
		const dstwDQWDPT = "0x0000000000000000000000000000000000000001"
		const srcAZnLQZZ = accounts[4]
		const valueDKq2UpJ = BigInt("568")
		const accountQlTwyyc = accounts[4]
		const nullz3RyJr2 = await contractBKoYSYh.claim.call({from: accounts[3]});
		const nullR7OKxTn = await contractBKoYSYh.claim.call({from: accounts[2]});
		const nulluBakJFc = await contractBKoYSYh.transferFrom.call(srcvAJgFBI, dstmFCM2Or, valueanXJB3, {from: accounts[2]});
		const nullLAyFoVi = await contractBKoYSYh.transferFrom.call(srcAZnLQZZ, dstwDQWDPT, valueimSwqZU, {from: accounts[5]});
		await contractBKoYSYh.deposit.call(valueDKq2UpJ, {from: accounts[1]});
		const nullFTizYUJ = await contractBKoYSYh.claimable.call(accountQlTwyyc, {from: accounts[1]});

		assert.equal(nullR7OKxTn, 0)
		assert.equal(nullz3RyJr2, 0)
		await expect(contractBKoYSYh.transferFrom.call(srcvAJgFBI, dstmFCM2Or, valueanXJB3, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractEZf9ajP = await VBZRXWrapper_alt.new({from: accounts[3]});
		const accountvI1Wlg = accounts[0]
		const valueUoPRU8k = BigInt("1106")
		const spenderG3tL451 = accounts[1]
		const nullO4syQ9H = await contractEZf9ajP.claimable.call(accountvI1Wlg, {from: accounts[1]});
		const nullUlgABH = await contractEZf9ajP.approve.call(spenderG3tL451, valueUoPRU8k, {from: accounts[4]});
		const nullpebPrsf = await contractEZf9ajP.claim.call({from: accounts[0]});

		assert.equal(nullO4syQ9H, 0)
		assert.equal(nullUlgABH, true)
		assert.equal(nullpebPrsf, 0)
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractGn7Bx8 = await VBZRXWrapper_alt.new({from: accounts[5]});
		const valueyRxqLqp = BigInt("2038")
		const valueP9Ldbf = BigInt("1889")
		const spenderwuEtxph = accounts[0]
		const valueeRl4417 = BigInt("763")
		const spenderkc5JTK = accounts[4]
		const nullUXDjjnY = await contractGn7Bx8.claim.call({from: accounts[1]});
		await contractGn7Bx8.exit.call({from: accounts[2]});
		await contractGn7Bx8.deposit.call(valueyRxqLqp, {from: accounts[3]});
		const null4DASkf = await contractGn7Bx8.approve.call(spenderwuEtxph, valueP9Ldbf, {from: accounts[4]});
		const nullCSXgcgK = await contractGn7Bx8.approve.call(spenderkc5JTK, valueeRl4417, {from: accounts[2]});

		assert.equal(nullUXDjjnY, 0)
		await expect(contractGn7Bx8.exit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractm9kLxG6 = await VBZRXWrapper_alt.new({from: "0x0000000000000000000000000000000000000001"});
		const valueXxSwB38 = BigInt("1587")
		const spenderA8TEqdi = accounts[0]
		const valuebjG9uYR = BigInt("32")
		const dstCNj7M5n = accounts[4]
		const srcP1lnkza = accounts[5]
		const nullIHNJ0p = await contractm9kLxG6.approve.call(spenderA8TEqdi, valueXxSwB38, {from: accounts[4]});
		const nullyshm1yo = await contractm9kLxG6.transferFrom.call(srcP1lnkza, dstCNj7M5n, valuebjG9uYR, {from: accounts[5]});
		const nullizZ6a7l = await contractm9kLxG6.claim.call({from: accounts[1]});
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractKBoh1m4 = await VBZRXWrapper_alt.new({from: accounts[5]});
		const valueBTOZHxR = BigInt("1999")
		const spendersC7fymW = accounts[0]
		const toggleujDgyPD = false
		const addrTL2YR4Y = accounts[2]
		const nullAtZCOcL = await contractKBoh1m4.approve.call(spendersC7fymW, valueBTOZHxR, {from: "0x0000000000000000000000000000000000000001"});
		await contractKBoh1m4.setBridge.call(addrTL2YR4Y, toggleujDgyPD, {from: accounts[1]});

		assert.equal(nullAtZCOcL, true)
		await expect(contractKBoh1m4.setBridge.call(addrTL2YR4Y, toggleujDgyPD, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractN3i5acd = await VBZRXWrapper_alt.new({from: accounts[5]});
		const valueAjVAoCR = BigInt("2028")
		const toggleoZcrxG2 = false
		const addrNmbMsPy = accounts[3]
		const valueYt7XZMl = BigInt("1668")
		const spendercoeMa0 = accounts[0]
		await contractN3i5acd.deposit.call(valueAjVAoCR, {from: accounts[5]});
		await contractN3i5acd.setBridge.call(addrNmbMsPy, toggleoZcrxG2, {from: accounts[1]});
		const nulldlimS3j = await contractN3i5acd.approve.call(spendercoeMa0, valueYt7XZMl, {from: accounts[4]});

		await expect(contractN3i5acd.deposit.call(valueAjVAoCR, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractbvAtxG = await VBZRXWrapper_alt.new({from: accounts[5]});
		const valueyAJhvKJ = BigInt("442")
		const dstwfmQR3 = accounts[1]
		const toggle2rmH1M = true
		const addrmmQnHws = accounts[2]
		const nulllDTXUzo = await contractbvAtxG.transfer.call(dstwfmQR3, valueyAJhvKJ, {from: accounts[4]});
		await contractbvAtxG.setBridge.call(addrmmQnHws, toggle2rmH1M, {from: accounts[1]});

		await expect(contractbvAtxG.transfer.call(dstwfmQR3, valueyAJhvKJ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractSFJYtMG = await VBZRXWrapper_alt.new({from: accounts[1]});
		const toggleJCvbKx = true
		const addrfwVeuN7 = accounts[1]
		const togglebQhi5Ou = true
		const addruVdwmxk = accounts[3]
		await contractSFJYtMG.setBridge.call(addrfwVeuN7, toggleJCvbKx, {from: accounts[1]});
		await contractSFJYtMG.setBridge.call(addruVdwmxk, togglebQhi5Ou, {from: "0x0000000000000000000000000000000000000001"});
		const nullQX2igjJ = await contractSFJYtMG.claim.call({from: accounts[3]});

		await expect(contractSFJYtMG.setBridge.call(addrfwVeuN7, toggleJCvbKx, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractQ5ELifg = await VBZRXWrapper_alt.new({from: accounts[3]});
		const valuetuCveia = BigInt("0")
		const dstGYZnTta = accounts[3]
		const nullueSD8U = await contractQ5ELifg.transfer.call(dstGYZnTta, valuetuCveia, {from: accounts[0]});
		await contractQ5ELifg.exit.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(contractQ5ELifg.transfer.call(dstGYZnTta, valuetuCveia, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})