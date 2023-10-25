const ERC721 = artifacts.require("ERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721', (accounts) => {
	it('test for ERC721', async () => {
		const contracte0bIdLn = await ERC721.new({from: accounts[1]});
		const tokenIdGL5zJx2 = BigInt("1360")
		const toxdigF9 = accounts[3]
		const fromjbDNDxC = accounts[2]
		const _datapspseW8 = "0x1a13120f0112091919180a1f1105"
		const tokenIdzjLub4z = BigInt("110")
		const toECHl5V = accounts[1]
		const fromJsN5gVg = accounts[3]
		const tokenIdGp6ydwW = BigInt("498")
		const tokenIddVx6UR = BigInt("1924")
		const toSruj0yV = "0x0000000000000000000000000000000000000001"
		const frommoOi7IW = "0x0000000000000000000000000000000000000001"
		const tokenIdY1Ra2jG = BigInt("31")
		const operatoriGIY7Lp = accounts[0]
		const ownerpFG140Z = accounts[4]
		await contracte0bIdLn.safeTransferFrom.call(fromjbDNDxC, toxdigF9, tokenIdGL5zJx2, {from: accounts[0]});
		await contracte0bIdLn.safeTransferFrom.call(fromJsN5gVg, toECHl5V, tokenIdzjLub4z, _datapspseW8, {from: accounts[2]});
		const nulljv9v0Y8 = await contracte0bIdLn.ownerOf.call(tokenIdGp6ydwW, {from: accounts[3]});
		await contracte0bIdLn.safeTransferFrom.call(frommoOi7IW, toSruj0yV, tokenIddVx6UR, {from: accounts[1]});
		const nullYJFKNYf = await contracte0bIdLn.ownerOf.call(tokenIdY1Ra2jG, {from: "0x0000000000000000000000000000000000000001"});
		const nullz7RJxnM = await contracte0bIdLn.isApprovedForAll.call(ownerpFG140Z, operatoriGIY7Lp, {from: accounts[0]});

		await expect(contracte0bIdLn.safeTransferFrom.call(fromjbDNDxC, toxdigF9, tokenIdGL5zJx2, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractc23cu8N = await ERC721.new({from: accounts[4]});
		const operatorc0m9igj = accounts[2]
		const ownerLDund27 = accounts[4]
		const tokenIdsng42Wk = BigInt("1736")
		const tokenIdXTkZkit = BigInt("492")
		const nullSvhltW = await contractc23cu8N.isApprovedForAll.call(ownerLDund27, operatorc0m9igj, {from: accounts[4]});
		const nullxcNHKy6 = await contractc23cu8N.ownerOf.call(tokenIdsng42Wk, {from: accounts[1]});
		const nulltvKZ1fz = await contractc23cu8N.ownerOf.call(tokenIdXTkZkit, {from: accounts[1]});

		assert.equal(nullSvhltW, false)
		await expect(contractc23cu8N.ownerOf.call(tokenIdsng42Wk, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractZJ0Ssg3 = await ERC721.new({from: "0x0000000000000000000000000000000000000001"});
		const approvedeMsZoB8 = false
		const toXnV6tu2 = accounts[3]
		const tokenIdjlCIBk = BigInt("1853")
		const toHq3Q0ME = "0x0000000000000000000000000000000000000001"
		const fromyQemVV = accounts[0]
		const tokenIdBuukqsd = BigInt("733")
		const touLAZBy = accounts[4]
		const frombmcK9Z = "0x0000000000000000000000000000000000000001"
		const tokenIdcJIoOKM = BigInt("216")
		const tosgre7xG = accounts[2]
		const fromfDvped8 = accounts[2]
		const tokenIdqrFHIrD = BigInt("1883")
		const tokenIda3nK61b = BigInt("1029")
		const toEGmionl = accounts[2]
		await contractZJ0Ssg3.setApprovalForAll.call(toXnV6tu2, approvedeMsZoB8, {from: accounts[3]});
		await contractZJ0Ssg3.safeTransferFrom.call(fromyQemVV, toHq3Q0ME, tokenIdjlCIBk, {from: accounts[4]});
		await contractZJ0Ssg3.safeTransferFrom.call(frombmcK9Z, touLAZBy, tokenIdBuukqsd, {from: accounts[1]});
		await contractZJ0Ssg3.transferFrom.call(fromfDvped8, tosgre7xG, tokenIdcJIoOKM, {from: accounts[2]});
		const nullRpySjn = await contractZJ0Ssg3.ownerOf.call(tokenIdqrFHIrD, {from: accounts[4]});
		await contractZJ0Ssg3.approve.call(toEGmionl, tokenIda3nK61b, {from: accounts[4]});
	});

	it('test for ERC721', async () => {
		const contractRw678E = await ERC721.new({from: accounts[1]});
		const tokenIdyqZh37h = BigInt("1612")
		const tokenIdJ52VMvI = BigInt("162")
		const tovO0C5Zx = accounts[1]
		const approvedYT3N3vb = false
		const to7pBdqJ = accounts[1]
		const nullbd9ybri = await contractRw678E.getApproved.call(tokenIdyqZh37h, {from: accounts[5]});
		await contractRw678E.approve.call(tovO0C5Zx, tokenIdJ52VMvI, {from: accounts[1]});
		await contractRw678E.setApprovalForAll.call(to7pBdqJ, approvedYT3N3vb, {from: accounts[3]});

		await expect(contractRw678E.getApproved.call(tokenIdyqZh37h, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractgOj5bwH = await ERC721.new({from: accounts[1]});
		const approvedKC0TCm3 = true
		const toMkMFXfV = accounts[3]
		const approvedSZ1gHkx = true
		const toOYXUERB = accounts[0]
		const tokenIdsY8DPrw = BigInt("1991")
		await contractgOj5bwH.setApprovalForAll.call(toMkMFXfV, approvedKC0TCm3, {from: accounts[3]});
		await contractgOj5bwH.setApprovalForAll.call(toOYXUERB, approvedSZ1gHkx, {from: accounts[3]});
		const nullrdZFBvr = await contractgOj5bwH.getApproved.call(tokenIdsY8DPrw, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractgOj5bwH.setApprovalForAll.call(toMkMFXfV, approvedKC0TCm3, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})