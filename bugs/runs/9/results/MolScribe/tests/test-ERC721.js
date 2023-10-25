const ERC721 = artifacts.require("ERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721', (accounts) => {
	it('test for ERC721', async () => {
		const contractdGJX2vX = await ERC721.new({from: accounts[4]});
		const tokenIdqjalLMF = BigInt("124")
		const tot0CMiPn = accounts[2]
		const fromjRlUtsC = accounts[3]
		const tokenIdm1KnD77 = BigInt("806")
		const tokenIdzRkZ6W = BigInt("1324")
		const topP1LEe7 = accounts[2]
		const fromMZ9eTfH = accounts[2]
		const approvedZDvXvrP = false
		const toIy4Nem = accounts[1]
		const tokenIdyKH7kA8 = BigInt("186")
		const tovYezWBL = accounts[0]
		const fromE4cAe7K = accounts[1]
		await contractdGJX2vX.safeTransferFrom.call(fromjRlUtsC, tot0CMiPn, tokenIdqjalLMF, {from: accounts[3]});
		const nullqPGwEU = await contractdGJX2vX.ownerOf.call(tokenIdm1KnD77, {from: "0x0000000000000000000000000000000000000001"});
		await contractdGJX2vX.safeTransferFrom.call(fromMZ9eTfH, topP1LEe7, tokenIdzRkZ6W, {from: accounts[4]});
		await contractdGJX2vX.setApprovalForAll.call(toIy4Nem, approvedZDvXvrP, {from: accounts[2]});
		await contractdGJX2vX.safeTransferFrom.call(fromE4cAe7K, tovYezWBL, tokenIdyKH7kA8, {from: accounts[3]});

		await expect(contractdGJX2vX.safeTransferFrom.call(fromjRlUtsC, tot0CMiPn, tokenIdqjalLMF, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractREAwJp = await ERC721.new({from: accounts[0]});
		const approvedlwyuJjH = true
		const tolULdNKY = "0x0000000000000000000000000000000000000001"
		const operatorkvsWDHu = accounts[5]
		const ownerqMWqmVR = accounts[2]
		const tokenIdyy7UgAV = BigInt("1064")
		const toaZMQ8v = accounts[1]
		const frommMBhzwJ = accounts[0]
		const tokenIdpXRZY91 = BigInt("749")
		const toWysq8pJ = accounts[3]
		await contractREAwJp.setApprovalForAll.call(tolULdNKY, approvedlwyuJjH, {from: "0x0000000000000000000000000000000000000001"});
		const nullD6hQhQy = await contractREAwJp.isApprovedForAll.call(ownerqMWqmVR, operatorkvsWDHu, {from: "0x0000000000000000000000000000000000000001"});
		await contractREAwJp.safeTransferFrom.call(frommMBhzwJ, toaZMQ8v, tokenIdyy7UgAV, {from: accounts[1]});
		await contractREAwJp.approve.call(toWysq8pJ, tokenIdpXRZY91, {from: accounts[4]});

		await expect(contractREAwJp.setApprovalForAll.call(tolULdNKY, approvedlwyuJjH, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractMwZbgBl = await ERC721.new({from: accounts[3]});
		const tokenId5rb8jy = BigInt("503")
		const toi5vvUir = accounts[3]
		const tokenIdcpRhw39 = BigInt("1480")
		const tokenIdg67BCLY = BigInt("299")
		const tokCrt1P1 = accounts[4]
		const fromyZe4ELr = accounts[3]
		const tokenIdT7Omxwc = BigInt("1763")
		const toP3Tf4JZ = accounts[0]
		const froms97K8Z = accounts[0]
		await contractMwZbgBl.approve.call(toi5vvUir, tokenId5rb8jy, {from: accounts[5]});
		const nullDdJeazf = await contractMwZbgBl.getApproved.call(tokenIdcpRhw39, {from: accounts[1]});
		await contractMwZbgBl.safeTransferFrom.call(fromyZe4ELr, tokCrt1P1, tokenIdg67BCLY, {from: accounts[0]});
		await contractMwZbgBl.safeTransferFrom.call(froms97K8Z, toP3Tf4JZ, tokenIdT7Omxwc, {from: accounts[4]});

		await expect(contractMwZbgBl.approve.call(toi5vvUir, tokenId5rb8jy, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractI67tu7 = await ERC721.new({from: accounts[4]});
		const tokenIdxQ7pe4V = BigInt("2016")
		const _datavLgyIMK = "0x0b171d120207131b181109170e0f1220"
		const tokenIdyOrIaxe = BigInt("1932")
		const toLFpQ1kr = accounts[2]
		const fromsdwdEPp = accounts[4]
		const tokenIdWszZ5B3 = BigInt("1671")
		const tokenIdrtwuNQ = BigInt("262")
		const tokenIdSStV522 = BigInt("508")
		const toGvTvnh = accounts[1]
		const ownerfWYe37P = accounts[2]
		const nullLeX0nm = await contractI67tu7.getApproved.call(tokenIdxQ7pe4V, {from: accounts[0]});
		await contractI67tu7.safeTransferFrom.call(fromsdwdEPp, toLFpQ1kr, tokenIdyOrIaxe, _datavLgyIMK, {from: accounts[1]});
		const nulltobr7fj = await contractI67tu7.ownerOf.call(tokenIdWszZ5B3, {from: accounts[4]});
		const nullFeP7O4r = await contractI67tu7.getApproved.call(tokenIdrtwuNQ, {from: accounts[3]});
		await contractI67tu7.approve.call(toGvTvnh, tokenIdSStV522, {from: "0x0000000000000000000000000000000000000001"});
		const nullY5GNwt9 = await contractI67tu7.balanceOf.call(ownerfWYe37P, {from: accounts[2]});

		await expect(contractI67tu7.getApproved.call(tokenIdxQ7pe4V, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contracthVEqTw9 = await ERC721.new({from: "0x0000000000000000000000000000000000000001"});
		const tokenIdmk4jj9A = BigInt("302")
		const toUnyNQu = accounts[0]
		const fromTc7whcQ = accounts[2]
		const operatorddXs770 = accounts[1]
		const ownerpf8bEFQ = "0x0000000000000000000000000000000000000001"
		const tokenIdKqNHtR = BigInt("1153")
		const tokenIdIRGf5MO = BigInt("162")
		await contracthVEqTw9.transferFrom.call(fromTc7whcQ, toUnyNQu, tokenIdmk4jj9A, {from: accounts[1]});
		const nullV2YxMn = await contracthVEqTw9.isApprovedForAll.call(ownerpf8bEFQ, operatorddXs770, {from: accounts[3]});
		const null32sf2C = await contracthVEqTw9.ownerOf.call(tokenIdKqNHtR, {from: accounts[3]});
		const nulljyMTcCy = await contracthVEqTw9.ownerOf.call(tokenIdIRGf5MO, {from: accounts[5]});
	});
})