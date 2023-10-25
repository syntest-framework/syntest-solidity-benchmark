const VBZRXWrapper_alt = artifacts.require("VBZRXWrapper_alt");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('VBZRXWrapper_alt', (accounts) => {
	it('test for VBZRXWrapper_alt', async () => {
		const contractKHzr6Vk = await VBZRXWrapper_alt.new({from: "0x0000000000000000000000000000000000000001"});
		const valuefodo74 = BigInt("1299")
		const spenderrU2iFS9 = accounts[0]
		const valueu1oWgYI = BigInt("206")
		const dstJdD7FPu = accounts[4]
		const srcoRoWNKt = accounts[4]
		const valuelznZ31T = BigInt("969")
		const dstm46mpKM = accounts[4]
		const srcimlmsRP = accounts[1]
		const nulla7lCnwo = await contractKHzr6Vk.approve.call(spenderrU2iFS9, valuefodo74, {from: accounts[0]});
		const nullWqZBTR2 = await contractKHzr6Vk.claim.call({from: accounts[0]});
		const nullD9PdYCg = await contractKHzr6Vk.transferFrom.call(srcoRoWNKt, dstJdD7FPu, valueu1oWgYI, {from: "0x0000000000000000000000000000000000000001"});
		const nullXzQtk2T = await contractKHzr6Vk.transferFrom.call(srcimlmsRP, dstm46mpKM, valuelznZ31T, {from: accounts[3]});
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractjKv6vbu = await VBZRXWrapper_alt.new({from: accounts[3]});
		const valuejZPA1qa = BigInt("1573")
		const valueflPSVk2 = BigInt("549")
		const dstLJqEc7E = accounts[4]
		const srcENNWs4 = accounts[0]
		await contractjKv6vbu.withdraw.call(valuejZPA1qa, {from: accounts[0]});
		const nullt1Yuh0X = await contractjKv6vbu.transferFrom.call(srcENNWs4, dstLJqEc7E, valueflPSVk2, {from: accounts[2]});

		await expect(contractjKv6vbu.withdraw.call(valuejZPA1qa, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractJq4pBl = await VBZRXWrapper_alt.new({from: accounts[1]});
		const valuey9N9sSq = BigInt("1368")
		const spenderF4fC5Jp = accounts[5]
		const accountSGAMTll = accounts[1]
		const nullv0fdJtT = await contractJq4pBl.approve.call(spenderF4fC5Jp, valuey9N9sSq, {from: accounts[3]});
		const null4OXv6M = await contractJq4pBl.claimable.call(accountSGAMTll, {from: accounts[5]});

		assert.equal(null4OXv6M, 0)
		assert.equal(nullv0fdJtT, true)
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractnOIIZlR = await VBZRXWrapper_alt.new({from: accounts[3]});
		const valueYvYxY1k = BigInt("1300")
		const dstPZklr4B = accounts[2]
		const srcqzI4Ei6 = accounts[5]
		const valuegTQgcQs = BigInt("947")
		const dstJJgUB8L = accounts[1]
		const valuefbXKAbE = BigInt("154")
		const nullx00hOWO = await contractnOIIZlR.transferFrom.call(srcqzI4Ei6, dstPZklr4B, valueYvYxY1k, {from: accounts[0]});
		const nullyGrmieW = await contractnOIIZlR.transfer.call(dstJJgUB8L, valuegTQgcQs, {from: "0x0000000000000000000000000000000000000001"});
		const nullrm0rlP0 = await contractnOIIZlR.claim.call({from: accounts[0]});
		await contractnOIIZlR.withdraw.call(valuefbXKAbE, {from: accounts[2]});

		await expect(contractnOIIZlR.transferFrom.call(srcqzI4Ei6, dstPZklr4B, valueYvYxY1k, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractZESSsA3 = await VBZRXWrapper_alt.new({from: accounts[4]});
		const togglevzCCp0 = true
		const addrTL9jy6Y = accounts[2]
		const valueVLdM3iT = BigInt("329")
		const dstLyUfkqE = accounts[3]
		const srcFe8kzGI = accounts[4]
		const valueNKbSxfF = BigInt("1643")
		const dstaagRKT = accounts[3]
		const srceCUDQNc = accounts[1]
		await contractZESSsA3.setBridge.call(addrTL9jy6Y, togglevzCCp0, {from: accounts[0]});
		const nullfye1cdG = await contractZESSsA3.transferFrom.call(srcFe8kzGI, dstLyUfkqE, valueVLdM3iT, {from: accounts[0]});
		await contractZESSsA3.exit.call({from: accounts[2]});
		const nullVZnixxa = await contractZESSsA3.transferFrom.call(srceCUDQNc, dstaagRKT, valueNKbSxfF, {from: accounts[2]});

		await expect(contractZESSsA3.setBridge.call(addrTL9jy6Y, togglevzCCp0, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractJkNDggx = await VBZRXWrapper_alt.new({from: accounts[2]});
		const valuelBLIoTg = BigInt("971")
		const dstdU7WiCi = "0x0000000000000000000000000000000000000001"
		const srcJV3AmXx = "0x0000000000000000000000000000000000000001"
		const valuephZd2L4 = BigInt("1679")
		const valueqGagdd3 = BigInt("1417")
		const dstEQ5con6 = accounts[1]
		await contractJkNDggx.exit.call({from: accounts[3]});
		const nullnnOfObo = await contractJkNDggx.transferFrom.call(srcJV3AmXx, dstdU7WiCi, valuelBLIoTg, {from: accounts[1]});
		await contractJkNDggx.withdraw.call(valuephZd2L4, {from: accounts[3]});
		const nulle0OWxds = await contractJkNDggx.transfer.call(dstEQ5con6, valueqGagdd3, {from: accounts[3]});

		await expect(contractJkNDggx.exit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractB3aQqEO = await VBZRXWrapper_alt.new({from: accounts[2]});
		const valueC6JOUgL = BigInt("110")
		const dstPnO7jha = accounts[5]
		const srcjf5fqJX = accounts[2]
		const valuekLeOuBa = BigInt("1003")
		const nullCAgNEiJ = await contractB3aQqEO.claim.call({from: accounts[3]});
		await contractB3aQqEO.exit.call({from: accounts[3]});
		const nulldGwGnEB = await contractB3aQqEO.transferFrom.call(srcjf5fqJX, dstPnO7jha, valueC6JOUgL, {from: accounts[3]});
		await contractB3aQqEO.withdraw.call(valuekLeOuBa, {from: accounts[3]});

		assert.equal(nullCAgNEiJ, 0)
		await expect(contractB3aQqEO.exit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractzG5Hluh = await VBZRXWrapper_alt.new({from: accounts[3]});
		const valueOEWmVtA = BigInt("1765")
		const dsthW6pKu2 = accounts[0]
		const valuenwWta6M = BigInt("1573")
		const valueo6yUVn = BigInt("549")
		const dstVzvKqBm = accounts[5]
		const srcW1CXKhh = accounts[0]
		const valueTJitUe3 = BigInt("991")
		const nullKHqg1aU = await contractzG5Hluh.transfer.call(dsthW6pKu2, valueOEWmVtA, {from: "0x0000000000000000000000000000000000000001"});
		await contractzG5Hluh.withdraw.call(valuenwWta6M, {from: accounts[0]});
		const nullFOSsL4N = await contractzG5Hluh.transferFrom.call(srcW1CXKhh, dstVzvKqBm, valueo6yUVn, {from: accounts[2]});
		await contractzG5Hluh.deposit.call(valueTJitUe3, {from: accounts[0]});

		await expect(contractzG5Hluh.transfer.call(dsthW6pKu2, valueOEWmVtA, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contract7YWnr2 = await VBZRXWrapper_alt.new({from: accounts[4]});
		const valueq2pdVZl = BigInt("1435")
		const spenderb1PBsnF = accounts[4]
		const valueFUYnTrB = BigInt("1536")
		const accountkfy7Mqa = accounts[4]
		const nullfO4wLZP = await contract7YWnr2.approve.call(spenderb1PBsnF, valueq2pdVZl, {from: accounts[1]});
		await contract7YWnr2.deposit.call(valueFUYnTrB, {from: "0x0000000000000000000000000000000000000001"});
		const nullsHs6D28 = await contract7YWnr2.claimable.call(accountkfy7Mqa, {from: accounts[1]});

		assert.equal(nullfO4wLZP, true)
		await expect(contract7YWnr2.deposit.call(valueFUYnTrB, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractjcNLLc2 = await VBZRXWrapper_alt.new({from: accounts[1]});
		const toggleqS9zwJw = false
		const addrXSWbSta = accounts[1]
		const valueqA5SJhi = BigInt("1816")
		const spenderqjFSJ4v = accounts[0]
		const accountDH24Ds = accounts[3]
		await contractjcNLLc2.setBridge.call(addrXSWbSta, toggleqS9zwJw, {from: accounts[1]});
		const nullYQxgDCd = await contractjcNLLc2.approve.call(spenderqjFSJ4v, valueqA5SJhi, {from: accounts[0]});
		const nullxhDTYT = await contractjcNLLc2.claimable.call(accountDH24Ds, {from: accounts[5]});

		assert.equal(nullYQxgDCd, true)
		assert.equal(nullxhDTYT, 0)
	});
})