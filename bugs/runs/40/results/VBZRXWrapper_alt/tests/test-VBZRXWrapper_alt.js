const VBZRXWrapper_alt = artifacts.require("VBZRXWrapper_alt");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('VBZRXWrapper_alt', (accounts) => {
	it('test for VBZRXWrapper_alt', async () => {
		const contractNPBPQ6y = await VBZRXWrapper_alt.new({from: accounts[2]});
		const valuebngm6aN = BigInt("1520")
		const spenderbNsTlBc = accounts[0]
		const valueFGU7YrV = BigInt("412")
		const spenderdQSVabV = accounts[4]
		const valueesoIKLt = BigInt("1129")
		const valuer6RDsXk = BigInt("1826")
		const spenderco3XZTn = "0x0000000000000000000000000000000000000001"
		const nullcxxwob = await contractNPBPQ6y.approve.call(spenderbNsTlBc, valuebngm6aN, {from: accounts[4]});
		const nulloeAmt4V = await contractNPBPQ6y.claim.call({from: accounts[2]});
		await contractNPBPQ6y.exit.call({from: accounts[3]});
		const nulljw9833L = await contractNPBPQ6y.approve.call(spenderdQSVabV, valueFGU7YrV, {from: accounts[2]});
		await contractNPBPQ6y.deposit.call(valueesoIKLt, {from: accounts[1]});
		const nullGQRzRD = await contractNPBPQ6y.approve.call(spenderco3XZTn, valuer6RDsXk, {from: accounts[2]});

		assert.equal(nullcxxwob, true)
		assert.equal(nulloeAmt4V, 0)
		await expect(contractNPBPQ6y.exit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractfvcqaV8 = await VBZRXWrapper_alt.new({from: accounts[1]});
		const accountwTfgTcP = accounts[1]
		const valueH3jhneh = BigInt("22")
		const valuesCLj1qN = BigInt("1889")
		const nulljUboSQR = await contractfvcqaV8.claimable.call(accountwTfgTcP, {from: accounts[0]});
		await contractfvcqaV8.withdraw.call(valueH3jhneh, {from: accounts[2]});
		await contractfvcqaV8.withdraw.call(valuesCLj1qN, {from: accounts[3]});

		assert.equal(nulljUboSQR, 0)
		await expect(contractfvcqaV8.withdraw.call(valueH3jhneh, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractyEZ1vf5 = await VBZRXWrapper_alt.new({from: accounts[3]});
		const valuegjPZDzD = BigInt("1282")
		const valuetypJvvL = BigInt("341")
		const dstbkQ1TFD = accounts[4]
		const srcWGIqFao = accounts[4]
		const valueDqz4txJ = BigInt("1017")
		const dstV6UDDc = accounts[2]
		const srcOIf681 = accounts[3]
		const valuefXaRkRo = BigInt("1697")
		await contractyEZ1vf5.deposit.call(valuegjPZDzD, {from: accounts[5]});
		const nullu2f1Gw2 = await contractyEZ1vf5.transferFrom.call(srcWGIqFao, dstbkQ1TFD, valuetypJvvL, {from: accounts[0]});
		const nullbGFmdR = await contractyEZ1vf5.transferFrom.call(srcOIf681, dstV6UDDc, valueDqz4txJ, {from: accounts[1]});
		await contractyEZ1vf5.withdraw.call(valuefXaRkRo, {from: accounts[1]});

		await expect(contractyEZ1vf5.deposit.call(valuegjPZDzD, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contract7Szerp = await VBZRXWrapper_alt.new({from: accounts[0]});
		const togglehQTP6ug = true
		const addrtQG2UWE = accounts[2]
		const value7Spm2j = BigInt("1139")
		const dstxPIhXjj = accounts[0]
		const src6cgcxd = accounts[0]
		const valuetLMbput = BigInt("1001")
		await contract7Szerp.setBridge.call(addrtQG2UWE, togglehQTP6ug, {from: accounts[3]});
		const nullYJbYQi0 = await contract7Szerp.claim.call({from: accounts[3]});
		const nulltJAjlhh = await contract7Szerp.transferFrom.call(src6cgcxd, dstxPIhXjj, value7Spm2j, {from: accounts[2]});
		await contract7Szerp.deposit.call(valuetLMbput, {from: accounts[2]});

		await expect(contract7Szerp.setBridge.call(addrtQG2UWE, togglehQTP6ug, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractzfe8rBF = await VBZRXWrapper_alt.new({from: accounts[2]});
		const valueDRebabx = BigInt("596")
		const dsteObQ0SZ = accounts[0]
		const accountNutwKr = accounts[3]
		const accountHAhXZKI = accounts[0]
		const valuerZ282s = BigInt("657")
		const dstJ6r08UZ = accounts[1]
		const srcgut65Gm = accounts[2]
		const nulltlP0BCk = await contractzfe8rBF.transfer.call(dsteObQ0SZ, valueDRebabx, {from: accounts[4]});
		const nullvOWb08i = await contractzfe8rBF.claimable.call(accountNutwKr, {from: accounts[2]});
		const nulllNl6aQ = await contractzfe8rBF.claim.call({from: "0x0000000000000000000000000000000000000001"});
		const nullQOAA6jV = await contractzfe8rBF.claimable.call(accountHAhXZKI, {from: accounts[1]});
		const nullbhrcIOF = await contractzfe8rBF.transferFrom.call(srcgut65Gm, dstJ6r08UZ, valuerZ282s, {from: accounts[3]});

		await expect(contractzfe8rBF.transfer.call(dsteObQ0SZ, valueDRebabx, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractG1fx7yU = await VBZRXWrapper_alt.new({from: "0x0000000000000000000000000000000000000001"});
		const valueMzdoew8 = BigInt("360")
		const dstf1sU5Iu = accounts[4]
		const srcLkmUs3x = accounts[1]
		const valuexjZw5jk = BigInt("672")
		const valuenrn073r = BigInt("2019")
		const spendernN5Ucbm = accounts[3]
		const nullyacayv = await contractG1fx7yU.transferFrom.call(srcLkmUs3x, dstf1sU5Iu, valueMzdoew8, {from: accounts[5]});
		await contractG1fx7yU.deposit.call(valuexjZw5jk, {from: accounts[0]});
		const nullLXOaxiY = await contractG1fx7yU.approve.call(spendernN5Ucbm, valuenrn073r, {from: accounts[5]});
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractFjitB1r = await VBZRXWrapper_alt.new({from: accounts[1]});
		const toggleBFb4pYN = false
		const addrtXtPr7e = accounts[1]
		const accountE9Wel6S = accounts[2]
		const valueFJzHXJL = BigInt("1889")
		const valueoS6Lj8 = BigInt("1250")
		const spenderMwpsQwl = accounts[4]
		await contractFjitB1r.setBridge.call(addrtXtPr7e, toggleBFb4pYN, {from: accounts[1]});
		const nullTghvNan = await contractFjitB1r.claimable.call(accountE9Wel6S, {from: accounts[0]});
		await contractFjitB1r.withdraw.call(valueFJzHXJL, {from: accounts[3]});
		const nullj0zyXC = await contractFjitB1r.approve.call(spenderMwpsQwl, valueoS6Lj8, {from: accounts[2]});

		assert.equal(nullTghvNan, 0)
		await expect(contractFjitB1r.claimable.call(accountE9Wel6S, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})