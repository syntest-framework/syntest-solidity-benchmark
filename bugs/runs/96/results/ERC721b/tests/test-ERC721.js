const ERC721 = artifacts.require("ERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721', (accounts) => {
	it('test for ERC721', async () => {
		const contractue6l5QD = await ERC721.new({from: accounts[1]});
		const tokenIdytISK5S = BigInt("670")
		const toP4WqQu = accounts[1]
		const operatormyIzRk = accounts[0]
		const ownerf2QbHa = accounts[1]
		const ownerWhSX5o = accounts[0]
		const ownereyJVowI = accounts[5]
		const tokenIdr0B6Sks = BigInt("1549")
		await contractue6l5QD.approve.call(toP4WqQu, tokenIdytISK5S, {from: "0x0000000000000000000000000000000000000001"});
		const nullC5KQKXo = await contractue6l5QD.isApprovedForAll.call(ownerf2QbHa, operatormyIzRk, {from: accounts[4]});
		const nullvz6ffJO = await contractue6l5QD.balanceOf.call(ownerWhSX5o, {from: accounts[4]});
		const nulluznjqFU = await contractue6l5QD.balanceOf.call(ownereyJVowI, {from: accounts[2]});
		const nullK59xViU = await contractue6l5QD.getApproved.call(tokenIdr0B6Sks, {from: accounts[0]});

		await expect(contractue6l5QD.approve.call(toP4WqQu, tokenIdytISK5S, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractuKOhicD = await ERC721.new({from: accounts[4]});
		const _dataTjwmfRM = "0x0b0a19181f11041112050e081818180d131303"
		const tokenId9mP1Hj = BigInt("1193")
		const toZLFXzwO = accounts[4]
		const fromZCl64V6 = accounts[2]
		const approvedwoxpx6A = true
		const tobAahJHw = accounts[1]
		const tokenIdsEDaYMe = BigInt("237")
		const tovafGxsj = accounts[5]
		const tokenIdgRc8MA = BigInt("245")
		const tokenIdsx8LM5h = BigInt("1781")
		const tojTIZkJS = accounts[2]
		const tokenIdD9jUEWs = BigInt("1074")
		const toq6RjKgE = accounts[3]
		await contractuKOhicD.safeTransferFrom.call(fromZCl64V6, toZLFXzwO, tokenId9mP1Hj, _dataTjwmfRM, {from: accounts[0]});
		await contractuKOhicD.setApprovalForAll.call(tobAahJHw, approvedwoxpx6A, {from: accounts[0]});
		await contractuKOhicD.approve.call(tovafGxsj, tokenIdsEDaYMe, {from: accounts[4]});
		const nullPbBeZ5F = await contractuKOhicD.ownerOf.call(tokenIdgRc8MA, {from: accounts[1]});
		await contractuKOhicD.approve.call(tojTIZkJS, tokenIdsx8LM5h, {from: accounts[1]});
		await contractuKOhicD.approve.call(toq6RjKgE, tokenIdD9jUEWs, {from: accounts[0]});

		await expect(contractuKOhicD.safeTransferFrom.call(fromZCl64V6, toZLFXzwO, tokenId9mP1Hj, _dataTjwmfRM, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractJAeucY = await ERC721.new({from: accounts[4]});
		const operatorppCLkOD = accounts[4]
		const ownerGnc8rNc = accounts[3]
		const tokenIdJ9OHWAc = BigInt("269")
		const nullmSSocWi = await contractJAeucY.isApprovedForAll.call(ownerGnc8rNc, operatorppCLkOD, {from: accounts[3]});
		const nulloPWihYm = await contractJAeucY.getApproved.call(tokenIdJ9OHWAc, {from: accounts[3]});

		assert.equal(nullmSSocWi, false)
		await expect(contractJAeucY.getApproved.call(tokenIdJ9OHWAc, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractXwUgETb = await ERC721.new({from: accounts[2]});
		const tokenIdefAsmrm = BigInt("1450")
		const to4fki9v = accounts[3]
		const fromky3oWvW = "0x0000000000000000000000000000000000000001"
		const approvedek3DpCW = true
		const to7Kqy3w = accounts[2]
		const _datah3XlVL6 = "0x0b0d08030901140a0103"
		const tokenIdfds7vrt = BigInt("497")
		const toeIM2c1x = accounts[0]
		const fromPfyJGS = accounts[1]
		await contractXwUgETb.safeTransferFrom.call(fromky3oWvW, to4fki9v, tokenIdefAsmrm, {from: accounts[2]});
		await contractXwUgETb.setApprovalForAll.call(to7Kqy3w, approvedek3DpCW, {from: accounts[2]});
		await contractXwUgETb.safeTransferFrom.call(fromPfyJGS, toeIM2c1x, tokenIdfds7vrt, _datah3XlVL6, {from: accounts[4]});

		await expect(contractXwUgETb.safeTransferFrom.call(fromky3oWvW, to4fki9v, tokenIdefAsmrm, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contracte9qe2Ax = await ERC721.new({from: "0x0000000000000000000000000000000000000001"});
		const tokenIdvMBtgJF = BigInt("899")
		const approvedO5sYzev = true
		const toSmTKxIq = accounts[4]
		const nullkiL3lBR = await contracte9qe2Ax.ownerOf.call(tokenIdvMBtgJF, {from: accounts[5]});
		await contracte9qe2Ax.setApprovalForAll.call(toSmTKxIq, approvedO5sYzev, {from: accounts[1]});
	});

	it('test for ERC721', async () => {
		const contractj11ibau = await ERC721.new({from: accounts[0]});
		const operatorrqKKr1k = accounts[2]
		const owner4sd2hR = accounts[2]
		const tokenIdetsBKXQ = BigInt("497")
		const tod8C2fpv = accounts[1]
		const fromSKL91PL = accounts[1]
		const tokenIdja1kCiK = BigInt("364")
		const tovVf6DMB = accounts[4]
		const tokenIdYtiCkk2 = BigInt("1855")
		const toS6UEkxQ = accounts[2]
		const fromDmITL8 = accounts[1]
		const tokenIdogNx5gY = BigInt("492")
		const nullzmR0Q9 = await contractj11ibau.isApprovedForAll.call(owner4sd2hR, operatorrqKKr1k, {from: accounts[0]});
		await contractj11ibau.transferFrom.call(fromSKL91PL, tod8C2fpv, tokenIdetsBKXQ, {from: accounts[1]});
		await contractj11ibau.approve.call(tovVf6DMB, tokenIdja1kCiK, {from: accounts[2]});
		await contractj11ibau.safeTransferFrom.call(fromDmITL8, toS6UEkxQ, tokenIdYtiCkk2, {from: "0x0000000000000000000000000000000000000001"});
		const nullXamidP = await contractj11ibau.ownerOf.call(tokenIdogNx5gY, {from: accounts[3]});

		assert.equal(nullzmR0Q9, false)
		await expect(contractj11ibau.transferFrom.call(fromSKL91PL, tod8C2fpv, tokenIdetsBKXQ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractxeoqWjh = await ERC721.new({from: accounts[2]});
		const approvedeysW24g = true
		const toXKD6CHv = accounts[2]
		const _dataRLNxdOY = "0x0b0d08030901140a0103"
		const tokenIdAEnlvw9 = BigInt("497")
		const tokiDqZl = accounts[0]
		const fromroxu8Na = accounts[1]
		await contractxeoqWjh.setApprovalForAll.call(toXKD6CHv, approvedeysW24g, {from: accounts[2]});
		await contractxeoqWjh.safeTransferFrom.call(fromroxu8Na, tokiDqZl, tokenIdAEnlvw9, _dataRLNxdOY, {from: accounts[4]});

		await expect(contractxeoqWjh.setApprovalForAll.call(toXKD6CHv, approvedeysW24g, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractgLOF2ZX = await ERC721.new({from: accounts[0]});
		const ownerdeZN24S = accounts[4]
		const operatorv4nAFuM = accounts[3]
		const ownerbvLvheD = accounts[2]
		const tokenIdGFts0dz = BigInt("497")
		const tokNgw9it = accounts[1]
		const fromEvN1nkz = accounts[1]
		const tokenIdYlayuu4 = BigInt("1855")
		const toIpnOxqn = accounts[2]
		const frombJYfKJS = accounts[1]
		const tokenIdJjc1Tjz = BigInt("492")
		const nulldbgHk9H = await contractgLOF2ZX.balanceOf.call(ownerdeZN24S, {from: accounts[2]});
		const nullv5VKYgC = await contractgLOF2ZX.isApprovedForAll.call(ownerbvLvheD, operatorv4nAFuM, {from: accounts[0]});
		await contractgLOF2ZX.transferFrom.call(fromEvN1nkz, tokNgw9it, tokenIdGFts0dz, {from: accounts[1]});
		await contractgLOF2ZX.safeTransferFrom.call(frombJYfKJS, toIpnOxqn, tokenIdYlayuu4, {from: "0x0000000000000000000000000000000000000001"});
		const nullMXlEfAy = await contractgLOF2ZX.ownerOf.call(tokenIdJjc1Tjz, {from: accounts[3]});

		assert.equal(nulldbgHk9H, 0)
		assert.equal(nullv5VKYgC, false)
		await expect(contractgLOF2ZX.transferFrom.call(fromEvN1nkz, tokNgw9it, tokenIdGFts0dz, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractCaUgZB = await ERC721.new({from: accounts[3]});
		const approvedYmu4how = true
		const toCATXnL9 = accounts[0]
		const approvedOjUVHIP = true
		const toHIe4eIp = accounts[4]
		const ownerZQRI8RE = accounts[4]
		const tokenIdiMnk6q8 = BigInt("1910")
		const tokenIdWM6BS4O = BigInt("1918")
		const toOjReJ7g = accounts[4]
		const fromUXR4xZ9 = accounts[0]
		await contractCaUgZB.setApprovalForAll.call(toCATXnL9, approvedYmu4how, {from: accounts[2]});
		await contractCaUgZB.setApprovalForAll.call(toHIe4eIp, approvedOjUVHIP, {from: "0x0000000000000000000000000000000000000001"});
		const nullCWEMK21 = await contractCaUgZB.balanceOf.call(ownerZQRI8RE, {from: accounts[4]});
		const nullvqDoEN = await contractCaUgZB.getApproved.call(tokenIdiMnk6q8, {from: accounts[4]});
		await contractCaUgZB.safeTransferFrom.call(fromUXR4xZ9, toOjReJ7g, tokenIdWM6BS4O, {from: accounts[5]});

		assert.equal(nullCWEMK21, 0)
		await expect(contractCaUgZB.setApprovalForAll.call(toHIe4eIp, approvedOjUVHIP, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractOpZcaC5 = await ERC721.new({from: accounts[2]});
		const tokenIdLrLyBXa = BigInt("1450")
		const toFBc6R8d = accounts[3]
		const fromCkKmoi = "0x00000000000000000000000000000000000000-1"
		await contractOpZcaC5.safeTransferFrom.call(fromCkKmoi, toFBc6R8d, tokenIdLrLyBXa, {from: accounts[2]});

		await expect(contractOpZcaC5.safeTransferFrom.call(fromCkKmoi, toFBc6R8d, tokenIdLrLyBXa, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractjgCN6yW = await ERC721.new({from: accounts[2]});
		const tokenIdOPgNR9k = BigInt("1450")
		const toR4BCfI9 = accounts[3]
		const fromIbkCKN = "0x00000000000000000000000000000000000000-2"
		await contractjgCN6yW.safeTransferFrom.call(fromIbkCKN, toR4BCfI9, tokenIdOPgNR9k, {from: accounts[2]});

		await expect(contractjgCN6yW.safeTransferFrom.call(fromIbkCKN, toR4BCfI9, tokenIdOPgNR9k, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})