const ERC721 = artifacts.require("ERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721', (accounts) => {
	it('test for ERC721', async () => {
		const contractCHAI72Y = await ERC721.new({from: accounts[5]});
		const tokenIdDAnP6oS = BigInt("883")
		const toveCna4t = accounts[3]
		const operatorpZUCIas = accounts[3]
		const ownerW96UEu = accounts[4]
		const tokenIdLgDUjvh = BigInt("1274")
		const toXcVfwSJ = accounts[5]
		const tokenIdGMOrSW = BigInt("1866")
		const toBwQA6iW = accounts[4]
		const fromEMg6wkG = accounts[3]
		const tokenIdaieqMCX = BigInt("1429")
		const toaeZSPWr = accounts[0]
		const from7nqDqi = accounts[5]
		await contractCHAI72Y.approve.call(toveCna4t, tokenIdDAnP6oS, {from: accounts[2]});
		const nullZANLPKe = await contractCHAI72Y.isApprovedForAll.call(ownerW96UEu, operatorpZUCIas, {from: accounts[0]});
		await contractCHAI72Y.approve.call(toXcVfwSJ, tokenIdLgDUjvh, {from: accounts[0]});
		await contractCHAI72Y.safeTransferFrom.call(fromEMg6wkG, toBwQA6iW, tokenIdGMOrSW, {from: accounts[3]});
		await contractCHAI72Y.transferFrom.call(from7nqDqi, toaeZSPWr, tokenIdaieqMCX, {from: accounts[4]});

		await expect(contractCHAI72Y.approve.call(toveCna4t, tokenIdDAnP6oS, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractiJw8bY4 = await ERC721.new({from: accounts[0]});
		const tokenIdfefE1Li = BigInt("114")
		const toI8Qntwy = accounts[4]
		const fromAteEKlw = accounts[2]
		const tokenIdarA72vf = BigInt("930")
		const tomdU9Eo = accounts[4]
		const fromODboDJc = accounts[2]
		const approvedRNrinxk = true
		const toXtxvdu = accounts[1]
		await contractiJw8bY4.safeTransferFrom.call(fromAteEKlw, toI8Qntwy, tokenIdfefE1Li, {from: accounts[2]});
		await contractiJw8bY4.transferFrom.call(fromODboDJc, tomdU9Eo, tokenIdarA72vf, {from: accounts[1]});
		await contractiJw8bY4.setApprovalForAll.call(toXtxvdu, approvedRNrinxk, {from: accounts[0]});

		await expect(contractiJw8bY4.safeTransferFrom.call(fromAteEKlw, toI8Qntwy, tokenIdfefE1Li, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractS6Yyj6 = await ERC721.new({from: accounts[5]});
		const approvedPyQZXxE = false
		const toKnms22b = accounts[2]
		const tokenIdESTIykB = BigInt("1470")
		const toXu6dEzX = accounts[2]
		const fromqK0VXa7 = accounts[4]
		await contractS6Yyj6.setApprovalForAll.call(toKnms22b, approvedPyQZXxE, {from: accounts[3]});
		await contractS6Yyj6.transferFrom.call(fromqK0VXa7, toXu6dEzX, tokenIdESTIykB, {from: accounts[3]});

		await expect(contractS6Yyj6.setApprovalForAll.call(toKnms22b, approvedPyQZXxE, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contract7CmyyT = await ERC721.new({from: accounts[2]});
		const operatorGEtU3h3 = accounts[4]
		const ownert77VsG = accounts[4]
		const tokenIddNZonW = BigInt("1763")
		const toLwz2ho = accounts[4]
		const fromDKACywJ = accounts[2]
		const tokenIdkuDWku = BigInt("527")
		const toTYMXEij = "0x0000000000000000000000000000000000000001"
		const fromIYrZBNn = accounts[4]
		const tokenIdRKrLy0V = BigInt("421")
		const nullFJkOiYp = await contract7CmyyT.isApprovedForAll.call(ownert77VsG, operatorGEtU3h3, {from: accounts[3]});
		await contract7CmyyT.safeTransferFrom.call(fromDKACywJ, toLwz2ho, tokenIddNZonW, {from: "0x0000000000000000000000000000000000000001"});
		await contract7CmyyT.safeTransferFrom.call(fromIYrZBNn, toTYMXEij, tokenIdkuDWku, {from: accounts[2]});
		const nullnb289kL = await contract7CmyyT.getApproved.call(tokenIdRKrLy0V, {from: accounts[5]});

		assert.equal(nullFJkOiYp, false)
		await expect(contract7CmyyT.safeTransferFrom.call(fromDKACywJ, toLwz2ho, tokenIddNZonW, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractkGDcVNx = await ERC721.new({from: accounts[2]});
		const tokenIdOTrI9gM = BigInt("187")
		const tokenIdi5ZClBL = BigInt("1251")
		const toKzPxVfb = accounts[0]
		const frominUws9 = accounts[4]
		const tokenIdtKZmw3L = BigInt("237")
		const toDROMN70 = accounts[3]
		const fromslnk67N = accounts[4]
		const tokenIdcnmnIub = BigInt("644")
		const tokenIdRSStHyB = BigInt("685")
		const approvedgp1mywB = false
		const toQbZF6WJ = accounts[3]
		const nullGxjQvyr = await contractkGDcVNx.getApproved.call(tokenIdOTrI9gM, {from: accounts[0]});
		await contractkGDcVNx.safeTransferFrom.call(frominUws9, toKzPxVfb, tokenIdi5ZClBL, {from: accounts[2]});
		await contractkGDcVNx.safeTransferFrom.call(fromslnk67N, toDROMN70, tokenIdtKZmw3L, {from: accounts[5]});
		const nullOVflXVD = await contractkGDcVNx.ownerOf.call(tokenIdcnmnIub, {from: accounts[3]});
		const nulliJ4rQc = await contractkGDcVNx.ownerOf.call(tokenIdRSStHyB, {from: accounts[2]});
		await contractkGDcVNx.setApprovalForAll.call(toQbZF6WJ, approvedgp1mywB, {from: accounts[4]});

		await expect(contractkGDcVNx.getApproved.call(tokenIdOTrI9gM, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contracthm0Ym9Q = await ERC721.new({from: "0x0000000000000000000000000000000000000001"});
		const owneragEOy5p = accounts[4]
		const tokenIdmZIHW0K = BigInt("426")
		const topq3I0HK = accounts[2]
		const tokenIdjmrRZ2c = BigInt("926")
		const tokkio79y = accounts[1]
		const operatorUSH2FxT = accounts[2]
		const ownerYWh5hRS = accounts[4]
		const operatorNIs1xf = "0x0000000000000000000000000000000000000001"
		const ownerx3njFzM = accounts[4]
		const nullqingKgA = await contracthm0Ym9Q.balanceOf.call(owneragEOy5p, {from: accounts[1]});
		await contracthm0Ym9Q.approve.call(topq3I0HK, tokenIdmZIHW0K, {from: accounts[2]});
		await contracthm0Ym9Q.approve.call(tokkio79y, tokenIdjmrRZ2c, {from: "0x0000000000000000000000000000000000000001"});
		const nullDUzxzTQ = await contracthm0Ym9Q.isApprovedForAll.call(ownerYWh5hRS, operatorUSH2FxT, {from: accounts[1]});
		const nullqFMM1Xg = await contracthm0Ym9Q.isApprovedForAll.call(ownerx3njFzM, operatorNIs1xf, {from: accounts[1]});
	});

	it('test for ERC721', async () => {
		const contracttUkAEwy = await ERC721.new({from: accounts[1]});
		const ownerRxIFsy6 = accounts[0]
		const approvedTNHy0gs = true
		const touYD46Nh = accounts[4]
		const tokenIdILEcviT = BigInt("255")
		const toLbPSYGS = accounts[2]
		const fromxKfoE72 = accounts[4]
		const tokenIdzA947uR = BigInt("1791")
		const togeXcNje = accounts[3]
		const fromUBN2rrY = accounts[0]
		const tokenIdT7dI2YT = BigInt("383")
		const toggXGe83 = accounts[0]
		const fromKcR5tmt = accounts[3]
		const tokenIdUTYZoIF = BigInt("942")
		const toyR3sqL = accounts[5]
		const fromwvRYcp9 = accounts[5]
		const nullWCC8eQ8 = await contracttUkAEwy.balanceOf.call(ownerRxIFsy6, {from: accounts[4]});
		await contracttUkAEwy.setApprovalForAll.call(touYD46Nh, approvedTNHy0gs, {from: accounts[4]});
		await contracttUkAEwy.transferFrom.call(fromxKfoE72, toLbPSYGS, tokenIdILEcviT, {from: accounts[1]});
		await contracttUkAEwy.transferFrom.call(fromUBN2rrY, togeXcNje, tokenIdzA947uR, {from: accounts[2]});
		await contracttUkAEwy.transferFrom.call(fromKcR5tmt, toggXGe83, tokenIdT7dI2YT, {from: accounts[3]});
		await contracttUkAEwy.safeTransferFrom.call(fromwvRYcp9, toyR3sqL, tokenIdUTYZoIF, {from: accounts[3]});

		assert.equal(nullWCC8eQ8, 0)
		await expect(contracttUkAEwy.setApprovalForAll.call(touYD46Nh, approvedTNHy0gs, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})