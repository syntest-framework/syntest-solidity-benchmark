const ERC721 = artifacts.require("ERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721', (accounts) => {
	it('test for ERC721', async () => {
		const contractWA09I9 = await ERC721.new({from: accounts[2]});
		const tokenIdEAoznN0 = BigInt("1381")
		const tooaDzAG5 = accounts[2]
		const tokenIdyvfDK62 = BigInt("188")
		const approvedR6w7jfy = true
		const tokAmI3DB = "0x0000000000000000000000000000000000000001"
		const ownerSZ7Z8Rx = accounts[2]
		await contractWA09I9.approve.call(tooaDzAG5, tokenIdEAoznN0, {from: accounts[0]});
		const nullzqN9S36 = await contractWA09I9.ownerOf.call(tokenIdyvfDK62, {from: accounts[3]});
		await contractWA09I9.setApprovalForAll.call(tokAmI3DB, approvedR6w7jfy, {from: "0x0000000000000000000000000000000000000001"});
		const nullwW27kXF = await contractWA09I9.balanceOf.call(ownerSZ7Z8Rx, {from: accounts[1]});

		await expect(contractWA09I9.approve.call(tooaDzAG5, tokenIdEAoznN0, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractSuZd9PK = await ERC721.new({from: accounts[2]});
		const ownerxpBYYzL = accounts[3]
		const tokenIdl8QX4z = BigInt("1620")
		const tovr1wTN = accounts[1]
		const approvedCW3yZBk = true
		const to0bL9pn = "0x0000000000000000000000000000000000000001"
		const tokenIdI4o8LyJ = BigInt("327")
		const toYqL1cr1 = "0x0000000000000000000000000000000000000001"
		const fromqM1aFYR = accounts[4]
		const approvedtOU5rSV = false
		const toMierUzW = accounts[3]
		const nulllnARh7g = await contractSuZd9PK.balanceOf.call(ownerxpBYYzL, {from: accounts[1]});
		await contractSuZd9PK.approve.call(tovr1wTN, tokenIdl8QX4z, {from: accounts[2]});
		await contractSuZd9PK.setApprovalForAll.call(to0bL9pn, approvedCW3yZBk, {from: accounts[4]});
		await contractSuZd9PK.transferFrom.call(fromqM1aFYR, toYqL1cr1, tokenIdI4o8LyJ, {from: accounts[0]});
		await contractSuZd9PK.setApprovalForAll.call(toMierUzW, approvedtOU5rSV, {from: accounts[4]});

		assert.equal(nulllnARh7g, 0)
		await expect(contractSuZd9PK.approve.call(tovr1wTN, tokenIdl8QX4z, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractjM4ptkD = await ERC721.new({from: accounts[1]});
		const tokenIdpyUQrrq = BigInt("315")
		const toVjpO4xk = accounts[0]
		const fromj72yn3W = accounts[1]
		const tokenIdc8rmQQ1 = BigInt("1418")
		const tokenIdDepSjRY = BigInt("1965")
		const toKDBahZu = accounts[0]
		const fromQSa2RdH = accounts[4]
		const tokenIdQgHDZXf = BigInt("1848")
		await contractjM4ptkD.safeTransferFrom.call(fromj72yn3W, toVjpO4xk, tokenIdpyUQrrq, {from: "0x0000000000000000000000000000000000000001"});
		const nullD1l5HkZ = await contractjM4ptkD.getApproved.call(tokenIdc8rmQQ1, {from: accounts[0]});
		await contractjM4ptkD.safeTransferFrom.call(fromQSa2RdH, toKDBahZu, tokenIdDepSjRY, {from: accounts[1]});
		const nullzn66h6s = await contractjM4ptkD.ownerOf.call(tokenIdQgHDZXf, {from: accounts[3]});

		await expect(contractjM4ptkD.safeTransferFrom.call(fromj72yn3W, toVjpO4xk, tokenIdpyUQrrq, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractuIR9Z2 = await ERC721.new({from: accounts[3]});
		const operatorZEtyloj = accounts[0]
		const ownerIurr0ma = accounts[0]
		const tokenIdjqkZ9e = BigInt("497")
		const tokenIdjzyFIjz = BigInt("417")
		const approvedRUVz7S = false
		const toQtR3dc7 = accounts[4]
		const tokenIdsEShqBe = BigInt("177")
		const tokenIdoG1dgXr = BigInt("481")
		const toTCmDuUV = accounts[4]
		const fromnmYMUt1 = accounts[4]
		const nullJ26E6Hj = await contractuIR9Z2.isApprovedForAll.call(ownerIurr0ma, operatorZEtyloj, {from: "0x0000000000000000000000000000000000000001"});
		const nullohnOE9N = await contractuIR9Z2.getApproved.call(tokenIdjqkZ9e, {from: accounts[2]});
		const nullu3POD50 = await contractuIR9Z2.ownerOf.call(tokenIdjzyFIjz, {from: accounts[2]});
		await contractuIR9Z2.setApprovalForAll.call(toQtR3dc7, approvedRUVz7S, {from: accounts[3]});
		const nullvljgEy = await contractuIR9Z2.getApproved.call(tokenIdsEShqBe, {from: accounts[5]});
		await contractuIR9Z2.safeTransferFrom.call(fromnmYMUt1, toTCmDuUV, tokenIdoG1dgXr, {from: accounts[0]});

		assert.equal(nullJ26E6Hj, false)
		await expect(contractuIR9Z2.getApproved.call(tokenIdjqkZ9e, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractE6FguCf = await ERC721.new({from: "0x0000000000000000000000000000000000000001"});
		const ownerx8SRYcf = accounts[1]
		const tokenIdJVC2cqE = BigInt("130")
		const toHuMfXHX = accounts[2]
		const fromYC4GtK = accounts[0]
		const tokenIdP5btbIb = BigInt("541")
		const tokenIddGkere = BigInt("795")
		const toJmCaAqw = accounts[2]
		const frombFAFeCd = accounts[2]
		const tokenIdmLsLz3 = BigInt("758")
		const toRiBPL12 = accounts[0]
		const nullD0hl7S3 = await contractE6FguCf.balanceOf.call(ownerx8SRYcf, {from: accounts[4]});
		await contractE6FguCf.transferFrom.call(fromYC4GtK, toHuMfXHX, tokenIdJVC2cqE, {from: accounts[4]});
		const nullxKaSJ1k = await contractE6FguCf.ownerOf.call(tokenIdP5btbIb, {from: accounts[1]});
		await contractE6FguCf.transferFrom.call(frombFAFeCd, toJmCaAqw, tokenIddGkere, {from: "0x0000000000000000000000000000000000000001"});
		await contractE6FguCf.approve.call(toRiBPL12, tokenIdmLsLz3, {from: accounts[0]});
	});

	it('test for ERC721', async () => {
		const contractO6ho0LN = await ERC721.new({from: accounts[0]});
		const operatoroyCbJvI = accounts[3]
		const ownerZJDDyOk = "0x0000000000000000000000000000000000000001"
		const approvedmFH59AZ = true
		const toyCAiuyX = accounts[2]
		const tokenIdjBuQBrt = BigInt("979")
		const tokenIdyVimpqJ = BigInt("1332")
		const toz4Z2Tbh = accounts[4]
		const nullTnP3L9K = await contractO6ho0LN.isApprovedForAll.call(ownerZJDDyOk, operatoroyCbJvI, {from: "0x0000000000000000000000000000000000000001"});
		await contractO6ho0LN.setApprovalForAll.call(toyCAiuyX, approvedmFH59AZ, {from: accounts[1]});
		const null9HbjOa = await contractO6ho0LN.getApproved.call(tokenIdjBuQBrt, {from: accounts[1]});
		await contractO6ho0LN.approve.call(toz4Z2Tbh, tokenIdyVimpqJ, {from: accounts[1]});

		assert.equal(nullTnP3L9K, false)
		await expect(contractO6ho0LN.setApprovalForAll.call(toyCAiuyX, approvedmFH59AZ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractbR0nMfl = await ERC721.new({from: accounts[5]});
		const tokenIdyAy8PQn = BigInt("1154")
		const towDySdx9 = accounts[1]
		const fromgXijTaj = "0x0000000000000000000000000000000000000001"
		const _datasVNNf2I = "0x10"
		const tokenIdHMNGWUQ = BigInt("1194")
		const toPf5ubTC = accounts[5]
		const fromtpTlWaA = "0x0000000000000000000000000000000000000001"
		const tokenIdd5osQbW = BigInt("586")
		await contractbR0nMfl.transferFrom.call(fromgXijTaj, towDySdx9, tokenIdyAy8PQn, {from: accounts[2]});
		await contractbR0nMfl.safeTransferFrom.call(fromtpTlWaA, toPf5ubTC, tokenIdHMNGWUQ, _datasVNNf2I, {from: accounts[0]});
		const nullPvd23q = await contractbR0nMfl.ownerOf.call(tokenIdd5osQbW, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractbR0nMfl.transferFrom.call(fromgXijTaj, towDySdx9, tokenIdyAy8PQn, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contracteJ7W2U9 = await ERC721.new({from: accounts[5]});
		const approvedWpAzdP9 = false
		const toolY22yq = accounts[4]
		const tokenIdX3tPGT5 = BigInt("584")
		await contracteJ7W2U9.setApprovalForAll.call(toolY22yq, approvedWpAzdP9, {from: accounts[4]});
		const nullY0ZkJBO = await contracteJ7W2U9.ownerOf.call(tokenIdX3tPGT5, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contracteJ7W2U9.setApprovalForAll.call(toolY22yq, approvedWpAzdP9, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})