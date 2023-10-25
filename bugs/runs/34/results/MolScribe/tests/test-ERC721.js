const ERC721 = artifacts.require("ERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721', (accounts) => {
	it('test for ERC721', async () => {
		const contractuYgdhro = await ERC721.new({from: accounts[3]});
		const tokenIdOCt8kxD = BigInt("85")
		const totgKHtLT = accounts[5]
		const fromssCUeLR = accounts[1]
		const tokenIdENxvAAv = BigInt("614")
		const toIMsG4X8 = accounts[3]
		const fromjARb25E = accounts[1]
		const _dataoGCoPaq = "0x0f0e03091f16051d0f141b0c050306201d120d13"
		const tokenIdtzmiCvX = BigInt("1828")
		const toY67p96m = "0x0000000000000000000000000000000000000001"
		const fromvO5K131 = "0x0000000000000000000000000000000000000001"
		const tokenIdaty2QL8 = BigInt("225")
		const _dataPyHQMbY = "0x0911160b1808"
		const tokenIdAFZHKxi = BigInt("1230")
		const tow3N5hI7 = accounts[1]
		const fromUekiBd = accounts[3]
		await contractuYgdhro.safeTransferFrom.call(fromssCUeLR, totgKHtLT, tokenIdOCt8kxD, {from: accounts[4]});
		await contractuYgdhro.transferFrom.call(fromjARb25E, toIMsG4X8, tokenIdENxvAAv, {from: accounts[0]});
		await contractuYgdhro.safeTransferFrom.call(fromvO5K131, toY67p96m, tokenIdtzmiCvX, _dataoGCoPaq, {from: accounts[3]});
		const nullMHAlj6 = await contractuYgdhro.getApproved.call(tokenIdaty2QL8, {from: accounts[3]});
		await contractuYgdhro.safeTransferFrom.call(fromUekiBd, tow3N5hI7, tokenIdAFZHKxi, _dataPyHQMbY, {from: accounts[5]});

		await expect(contractuYgdhro.safeTransferFrom.call(fromssCUeLR, totgKHtLT, tokenIdOCt8kxD, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contracth63wAbL = await ERC721.new({from: accounts[3]});
		const tokenIdISCn4bj = BigInt("739")
		const toc4TwprR = accounts[2]
		const tokenIdSy0cxy = BigInt("201")
		const toC7B8Pkn = accounts[2]
		const fromGV7izVF = accounts[0]
		const operatordlkjXTF = accounts[3]
		const ownerbMCnDW6 = accounts[3]
		await contracth63wAbL.approve.call(toc4TwprR, tokenIdISCn4bj, {from: accounts[0]});
		await contracth63wAbL.safeTransferFrom.call(fromGV7izVF, toC7B8Pkn, tokenIdSy0cxy, {from: accounts[1]});
		const nullTLF0LJg = await contracth63wAbL.isApprovedForAll.call(ownerbMCnDW6, operatordlkjXTF, {from: accounts[5]});

		await expect(contracth63wAbL.approve.call(toc4TwprR, tokenIdISCn4bj, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractCE2RToE = await ERC721.new({from: accounts[0]});
		const tokenIdPvCnkpx = BigInt("2042")
		const tokenIdMRKEaqK = BigInt("808")
		const tooIV2FIo = "0x0000000000000000000000000000000000000001"
		const tokenIdI6Q6ji = BigInt("839")
		const nullUTskYaX = await contractCE2RToE.getApproved.call(tokenIdPvCnkpx, {from: accounts[1]});
		await contractCE2RToE.approve.call(tooIV2FIo, tokenIdMRKEaqK, {from: accounts[1]});
		const nullDQlm2qf = await contractCE2RToE.ownerOf.call(tokenIdI6Q6ji, {from: accounts[3]});

		await expect(contractCE2RToE.getApproved.call(tokenIdPvCnkpx, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractg56CGp = await ERC721.new({from: "0x0000000000000000000000000000000000000001"});
		const tokenIdDGJ9k39 = BigInt("485")
		const to1VLNiQ = accounts[3]
		const fromykmZrxZ = accounts[1]
		const approvedrHlSVG = false
		const toz6a4D6 = accounts[4]
		const tokenIdBg8D7ZN = BigInt("49")
		const totH0klxt = accounts[1]
		await contractg56CGp.safeTransferFrom.call(fromykmZrxZ, to1VLNiQ, tokenIdDGJ9k39, {from: accounts[4]});
		await contractg56CGp.setApprovalForAll.call(toz6a4D6, approvedrHlSVG, {from: accounts[2]});
		await contractg56CGp.approve.call(totH0klxt, tokenIdBg8D7ZN, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for ERC721', async () => {
		const contractsFqVOTB = await ERC721.new({from: accounts[1]});
		const approvedYIY0DqV = false
		const to5KwNOd = accounts[4]
		const tokenIdQQ1kZr9 = BigInt("167")
		const tokenIdKSjlt1A = BigInt("1898")
		const tohtBtJrW = accounts[2]
		const frombOZC4zT = accounts[1]
		await contractsFqVOTB.setApprovalForAll.call(to5KwNOd, approvedYIY0DqV, {from: accounts[4]});
		const nullXdnXpnD = await contractsFqVOTB.getApproved.call(tokenIdQQ1kZr9, {from: accounts[4]});
		await contractsFqVOTB.safeTransferFrom.call(frombOZC4zT, tohtBtJrW, tokenIdKSjlt1A, {from: accounts[5]});

		await expect(contractsFqVOTB.setApprovalForAll.call(to5KwNOd, approvedYIY0DqV, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})