const ERC721 = artifacts.require("ERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721', (accounts) => {
	it('test for ERC721', async () => {
		const contractvph5Ht = await ERC721.new({from: accounts[5]});
		const tokenIdbSsmfMK = BigInt("1345")
		const tonwYEn1G = accounts[2]
		const fromBbsPuTn = accounts[5]
		const operatorp8MqtFa = accounts[4]
		const owner0SisFz = accounts[3]
		const tokenIdUy7R1gW = BigInt("622")
		const toKlBMRUf = "0x0000000000000000000000000000000000000001"
		const fromWWuPjXK = accounts[2]
		const tokenIdrTaicQp = BigInt("1750")
		await contractvph5Ht.transferFrom.call(fromBbsPuTn, tonwYEn1G, tokenIdbSsmfMK, {from: accounts[2]});
		const nully9pHRDA = await contractvph5Ht.isApprovedForAll.call(owner0SisFz, operatorp8MqtFa, {from: accounts[4]});
		await contractvph5Ht.transferFrom.call(fromWWuPjXK, toKlBMRUf, tokenIdUy7R1gW, {from: accounts[2]});
		const nullqJQbnkb = await contractvph5Ht.getApproved.call(tokenIdrTaicQp, {from: accounts[2]});

		await expect(contractvph5Ht.transferFrom.call(fromBbsPuTn, tonwYEn1G, tokenIdbSsmfMK, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractFT2Ly1j = await ERC721.new({from: accounts[4]});
		const tokenIdWywsAGq = BigInt("609")
		const tohMaU6M = accounts[4]
		const tokenIdc14QfXZ = BigInt("133")
		const toKXTZKjY = accounts[3]
		const fromanbmwH = accounts[4]
		const tokenIdeYnJpo3 = BigInt("913")
		const tobosv4NS = accounts[1]
		const tokenIdkE2FQv = BigInt("564")
		const toh1qDroo = accounts[5]
		const fromaYI3wg = accounts[3]
		const tokenIdv3qoONi = BigInt("543")
		await contractFT2Ly1j.approve.call(tohMaU6M, tokenIdWywsAGq, {from: accounts[2]});
		await contractFT2Ly1j.safeTransferFrom.call(fromanbmwH, toKXTZKjY, tokenIdc14QfXZ, {from: accounts[3]});
		await contractFT2Ly1j.approve.call(tobosv4NS, tokenIdeYnJpo3, {from: accounts[5]});
		await contractFT2Ly1j.transferFrom.call(fromaYI3wg, toh1qDroo, tokenIdkE2FQv, {from: accounts[2]});
		const nullFoI9Wgl = await contractFT2Ly1j.getApproved.call(tokenIdv3qoONi, {from: accounts[3]});

		await expect(contractFT2Ly1j.approve.call(tohMaU6M, tokenIdWywsAGq, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractVAY1bpC = await ERC721.new({from: "0x0000000000000000000000000000000000000001"});
		const tokenIdEwemXix = BigInt("1372")
		const tov67Sy3l = accounts[1]
		const fromfRByeRj = accounts[0]
		const operatorHfcKAIO = accounts[2]
		const ownerMYpspgM = accounts[0]
		await contractVAY1bpC.transferFrom.call(fromfRByeRj, tov67Sy3l, tokenIdEwemXix, {from: accounts[3]});
		const nullAkTPJO8 = await contractVAY1bpC.isApprovedForAll.call(ownerMYpspgM, operatorHfcKAIO, {from: accounts[4]});
	});

	it('test for ERC721', async () => {
		const contractbZHjeJL = await ERC721.new({from: accounts[0]});
		const tokenIddqyFE1Q = BigInt("1868")
		const nullZ11qFQP = await contractbZHjeJL.getApproved.call(tokenIddqyFE1Q, {from: accounts[5]});

		await expect(contractbZHjeJL.getApproved.call(tokenIddqyFE1Q, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractITY1l2e = await ERC721.new({from: accounts[1]});
		const approvedNfEc1Ab = true
		const toPfrMj9Q = accounts[0]
		const ownerSP2jJCN = accounts[1]
		const tokenIdkowWoY = BigInt("1629")
		const top8lqaLz = accounts[1]
		const fromoFyTxx = accounts[0]
		const operatorWJNxLLx = accounts[4]
		const ownerk54tWWM = accounts[5]
		const tokenIdKqae3wZ = BigInt("1603")
		const tokenId1XY0Vn = BigInt("2042")
		const toxPC4sU2 = "0x0000000000000000000000000000000000000001"
		const fromx2F8Lex = accounts[0]
		await contractITY1l2e.setApprovalForAll.call(toPfrMj9Q, approvedNfEc1Ab, {from: accounts[0]});
		const nullglm0dFG = await contractITY1l2e.balanceOf.call(ownerSP2jJCN, {from: accounts[2]});
		await contractITY1l2e.transferFrom.call(fromoFyTxx, top8lqaLz, tokenIdkowWoY, {from: accounts[2]});
		const null3XobWA = await contractITY1l2e.isApprovedForAll.call(ownerk54tWWM, operatorWJNxLLx, {from: "0x0000000000000000000000000000000000000001"});
		const nullyp5agVB = await contractITY1l2e.ownerOf.call(tokenIdKqae3wZ, {from: accounts[3]});
		await contractITY1l2e.safeTransferFrom.call(fromx2F8Lex, toxPC4sU2, tokenId1XY0Vn, {from: accounts[0]});

		await expect(contractITY1l2e.setApprovalForAll.call(toPfrMj9Q, approvedNfEc1Ab, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})