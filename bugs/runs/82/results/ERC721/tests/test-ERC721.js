const ERC721 = artifacts.require("ERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721', (accounts) => {
	it('test for ERC721', async () => {
		const contract9wEHSE = await ERC721.new({from: accounts[3]});
		const operatorNlq6hx = accounts[1]
		const ownerNqgGth5 = accounts[0]
		const tokenIdEmM6SVP = BigInt("795")
		const toPNmqyCY = accounts[5]
		const approvedMOSUPUx = true
		const tok6GUEMB = accounts[4]
		const _dataorRQmjD = "0x010d"
		const tokenIdner4v2r = BigInt("1799")
		const toCDfXSVv = accounts[3]
		const fromswhLIxk = accounts[2]
		const nulld8vEVZz = await contract9wEHSE.isApprovedForAll.call(ownerNqgGth5, operatorNlq6hx, {from: accounts[5]});
		await contract9wEHSE.approve.call(toPNmqyCY, tokenIdEmM6SVP, {from: accounts[1]});
		await contract9wEHSE.setApprovalForAll.call(tok6GUEMB, approvedMOSUPUx, {from: accounts[2]});
		await contract9wEHSE.safeTransferFrom.call(fromswhLIxk, toCDfXSVv, tokenIdner4v2r, _dataorRQmjD, {from: accounts[4]});

		assert.equal(nulld8vEVZz, false)
		await expect(contract9wEHSE.approve.call(toPNmqyCY, tokenIdEmM6SVP, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractR1XcsVO = await ERC721.new({from: accounts[4]});
		const tokenIdrDzGQ6 = BigInt("526")
		const touluES2E = accounts[0]
		const fromagJZwqh = accounts[2]
		const approvedqRmko3n = true
		const tojXVw60g = accounts[1]
		const tokenIdn9yV2GW = BigInt("445")
		await contractR1XcsVO.safeTransferFrom.call(fromagJZwqh, touluES2E, tokenIdrDzGQ6, {from: accounts[1]});
		await contractR1XcsVO.setApprovalForAll.call(tojXVw60g, approvedqRmko3n, {from: accounts[0]});
		const nullDbaT822 = await contractR1XcsVO.getApproved.call(tokenIdn9yV2GW, {from: accounts[5]});

		await expect(contractR1XcsVO.safeTransferFrom.call(fromagJZwqh, touluES2E, tokenIdrDzGQ6, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractlyDfTHK = await ERC721.new({from: accounts[1]});
		const operator8HKQsi = accounts[3]
		const ownercqhCkbU = accounts[5]
		const tokenIdt1y2C0S = BigInt("217")
		const tokenIdKZZE8r1 = BigInt("1569")
		const toOrxkBYS = accounts[4]
		const nullT6bAyn3 = await contractlyDfTHK.isApprovedForAll.call(ownercqhCkbU, operator8HKQsi, {from: accounts[4]});
		const nullL5se34J = await contractlyDfTHK.getApproved.call(tokenIdt1y2C0S, {from: accounts[0]});
		await contractlyDfTHK.approve.call(toOrxkBYS, tokenIdKZZE8r1, {from: accounts[5]});

		assert.equal(nullT6bAyn3, false)
		await expect(contractlyDfTHK.getApproved.call(tokenIdt1y2C0S, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractdww89Q = await ERC721.new({from: accounts[4]});
		const operatorAS4EzD1 = accounts[2]
		const ownerwklg9qH = accounts[2]
		const operatorIHJhFfN = accounts[4]
		const ownervKK6iB7 = accounts[4]
		const ownerz8Fa1d = accounts[3]
		const nullhS1XUTW = await contractdww89Q.isApprovedForAll.call(ownerwklg9qH, operatorAS4EzD1, {from: accounts[0]});
		const nullu5WtFZS = await contractdww89Q.isApprovedForAll.call(ownervKK6iB7, operatorIHJhFfN, {from: accounts[4]});
		const nullHBS7pKz = await contractdww89Q.balanceOf.call(ownerz8Fa1d, {from: accounts[3]});

		assert.equal(nullHBS7pKz, 0)
		assert.equal(nullhS1XUTW, false)
		assert.equal(nullu5WtFZS, false)
	});

	it('test for ERC721', async () => {
		const contractD0ejEJ = await ERC721.new({from: accounts[2]});
		const approvedozVYQqQ = true
		const toOC8HeKB = accounts[4]
		const approved7BHk9O = false
		const top2Y5Rav = accounts[4]
		const operatorzoGl3hA = accounts[1]
		const ownerPRckgYW = accounts[4]
		await contractD0ejEJ.setApprovalForAll.call(toOC8HeKB, approvedozVYQqQ, {from: "0x0000000000000000000000000000000000000001"});
		await contractD0ejEJ.setApprovalForAll.call(top2Y5Rav, approved7BHk9O, {from: accounts[4]});
		const nullYd5GEOi = await contractD0ejEJ.isApprovedForAll.call(ownerPRckgYW, operatorzoGl3hA, {from: accounts[3]});

		await expect(contractD0ejEJ.setApprovalForAll.call(toOC8HeKB, approvedozVYQqQ, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractCgqCVaI = await ERC721.new({from: accounts[2]});
		const ownerWABlOMl = accounts[1]
		const tokenIdDczKd9Q = BigInt("352")
		const tooK8Ikn7 = accounts[4]
		const fromBEvFxd = accounts[4]
		const tokenIdIm9k7kv = BigInt("31")
		const nullcrqnBpg = await contractCgqCVaI.balanceOf.call(ownerWABlOMl, {from: accounts[2]});
		await contractCgqCVaI.transferFrom.call(fromBEvFxd, tooK8Ikn7, tokenIdDczKd9Q, {from: accounts[2]});
		const nullgU92QKm = await contractCgqCVaI.ownerOf.call(tokenIdIm9k7kv, {from: accounts[0]});

		assert.equal(nullcrqnBpg, 0)
		await expect(contractCgqCVaI.transferFrom.call(fromBEvFxd, tooK8Ikn7, tokenIdDczKd9Q, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contracttMCTgTO = await ERC721.new({from: "0x0000000000000000000000000000000000000001"});
		const _datap8YKIdb = "0x1a1206000504141a1f131502070e17"
		const tokenIdreIabCK = BigInt("948")
		const toV23eMAN = accounts[1]
		const fromwnCPL91 = accounts[5]
		const tokenIdv3iMVg9 = BigInt("656")
		const toZrsqA4y = accounts[2]
		const fromWjIK2WZ = accounts[1]
		const tokenIdL4thhja = BigInt("1542")
		const too6EB2F = accounts[1]
		const fromz4pnuKY = accounts[4]
		const operatorBMyFSQ2 = accounts[0]
		const ownerfIRoQ9n = accounts[4]
		const tokenIdjYBYkCt = BigInt("1942")
		const toxtBfphn = accounts[3]
		const owner3WJdtD = "0x0000000000000000000000000000000000000001"
		await contracttMCTgTO.safeTransferFrom.call(fromwnCPL91, toV23eMAN, tokenIdreIabCK, _datap8YKIdb, {from: accounts[4]});
		await contracttMCTgTO.safeTransferFrom.call(fromWjIK2WZ, toZrsqA4y, tokenIdv3iMVg9, {from: accounts[5]});
		await contracttMCTgTO.safeTransferFrom.call(fromz4pnuKY, too6EB2F, tokenIdL4thhja, {from: accounts[3]});
		const nullVHYYA7R = await contracttMCTgTO.isApprovedForAll.call(ownerfIRoQ9n, operatorBMyFSQ2, {from: accounts[4]});
		await contracttMCTgTO.approve.call(toxtBfphn, tokenIdjYBYkCt, {from: accounts[0]});
		const nullV5DWwEW = await contracttMCTgTO.balanceOf.call(owner3WJdtD, {from: accounts[2]});
	});
})