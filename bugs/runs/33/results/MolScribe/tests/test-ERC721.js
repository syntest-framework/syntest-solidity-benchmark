const ERC721 = artifacts.require("ERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721', (accounts) => {
	it('test for ERC721', async () => {
		const contractW8WbSFy = await ERC721.new({from: accounts[4]});
		const tokenIdzTxh44B = BigInt("22")
		const toOpsTi9 = "0x0000000000000000000000000000000000000001"
		const fromkEelY2E = accounts[2]
		const tokenIdVyqSks5 = BigInt("1750")
		const toSPyqRN3 = accounts[3]
		const _dataetif9X9 = "0x1d1c0e"
		const tokenIdTFXpvrj = BigInt("548")
		const toSW4Y3uy = accounts[1]
		const fromQiPp0dt = accounts[2]
		const tokenIdj70YPiq = BigInt("1526")
		const toYMq7sK = accounts[2]
		const tokenIdDgO4Nu7 = BigInt("555")
		const toJxaYohB = accounts[3]
		const from0gLgvO = accounts[1]
		await contractW8WbSFy.safeTransferFrom.call(fromkEelY2E, toOpsTi9, tokenIdzTxh44B, {from: accounts[3]});
		await contractW8WbSFy.approve.call(toSPyqRN3, tokenIdVyqSks5, {from: accounts[5]});
		await contractW8WbSFy.safeTransferFrom.call(fromQiPp0dt, toSW4Y3uy, tokenIdTFXpvrj, _dataetif9X9, {from: accounts[5]});
		await contractW8WbSFy.approve.call(toYMq7sK, tokenIdj70YPiq, {from: accounts[1]});
		await contractW8WbSFy.transferFrom.call(from0gLgvO, toJxaYohB, tokenIdDgO4Nu7, {from: accounts[1]});

		await expect(contractW8WbSFy.safeTransferFrom.call(fromkEelY2E, toOpsTi9, tokenIdzTxh44B, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractfvI8gXB = await ERC721.new({from: accounts[4]});
		const tokenIdYGdhVyL = BigInt("367")
		const toyFYK97A = accounts[3]
		const tokenIdilfk1P = BigInt("1283")
		const toJ18Owel = accounts[4]
		const fromRZ62ytx = accounts[3]
		const tokenIdzgD21w = BigInt("1705")
		const tokenIdD4aYSu2 = BigInt("1201")
		const toZeF8iwU = accounts[0]
		const fromFvGLrWd = accounts[0]
		await contractfvI8gXB.approve.call(toyFYK97A, tokenIdYGdhVyL, {from: accounts[4]});
		await contractfvI8gXB.safeTransferFrom.call(fromRZ62ytx, toJ18Owel, tokenIdilfk1P, {from: accounts[3]});
		const nullDGZKdqM = await contractfvI8gXB.ownerOf.call(tokenIdzgD21w, {from: accounts[5]});
		await contractfvI8gXB.transferFrom.call(fromFvGLrWd, toZeF8iwU, tokenIdD4aYSu2, {from: accounts[2]});

		await expect(contractfvI8gXB.approve.call(toyFYK97A, tokenIdYGdhVyL, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractlxDieo = await ERC721.new({from: accounts[4]});
		const tokenIdjPhfMH = BigInt("1197")
		const operatorWqvyeuv = accounts[0]
		const ownerF8MOYnh = accounts[4]
		const tokenIdvdKXD21 = BigInt("1088")
		const operatorJ2cR0XN = accounts[4]
		const ownerAfPgZq = accounts[1]
		const tokenIdOoh60VV = BigInt("1439")
		const toabZtlY = accounts[0]
		const fromYBUWIdY = accounts[4]
		const nullKhEG1pi = await contractlxDieo.getApproved.call(tokenIdjPhfMH, {from: accounts[0]});
		const nullAd9Fkdv = await contractlxDieo.isApprovedForAll.call(ownerF8MOYnh, operatorWqvyeuv, {from: accounts[4]});
		const nullEhQ2DAT = await contractlxDieo.ownerOf.call(tokenIdvdKXD21, {from: "0x0000000000000000000000000000000000000001"});
		const nullUETaDmx = await contractlxDieo.isApprovedForAll.call(ownerAfPgZq, operatorJ2cR0XN, {from: accounts[4]});
		await contractlxDieo.safeTransferFrom.call(fromYBUWIdY, toabZtlY, tokenIdOoh60VV, {from: accounts[3]});

		await expect(contractlxDieo.getApproved.call(tokenIdjPhfMH, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractwNBppGw = await ERC721.new({from: "0x0000000000000000000000000000000000000001"});
		const tokenIdw7jUC1L = BigInt("1133")
		const tokenIdYR2Bm0 = BigInt("1347")
		const toQBERsyk = accounts[2]
		const fromZWyF7sV = accounts[2]
		const ownerFgGLkv = "0x0000000000000000000000000000000000000001"
		const approvedYh4c3Yx = true
		const tobg4cYzL = accounts[2]
		const nullXaDec98 = await contractwNBppGw.ownerOf.call(tokenIdw7jUC1L, {from: accounts[0]});
		await contractwNBppGw.safeTransferFrom.call(fromZWyF7sV, toQBERsyk, tokenIdYR2Bm0, {from: accounts[5]});
		const nullflRgdRX = await contractwNBppGw.balanceOf.call(ownerFgGLkv, {from: accounts[2]});
		await contractwNBppGw.setApprovalForAll.call(tobg4cYzL, approvedYh4c3Yx, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for ERC721', async () => {
		const contractxdNlNUL = await ERC721.new({from: accounts[4]});
		const approvedlfNwkDX = false
		const toZDk0bsV = accounts[4]
		const tokenIdQkbNyVs = BigInt("1503")
		const tond1IRn6 = accounts[3]
		const fromXrhm4fX = accounts[2]
		await contractxdNlNUL.setApprovalForAll.call(toZDk0bsV, approvedlfNwkDX, {from: accounts[4]});
		await contractxdNlNUL.safeTransferFrom.call(fromXrhm4fX, tond1IRn6, tokenIdQkbNyVs, {from: accounts[2]});

		await expect(contractxdNlNUL.setApprovalForAll.call(toZDk0bsV, approvedlfNwkDX, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})