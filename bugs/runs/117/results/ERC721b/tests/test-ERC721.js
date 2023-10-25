const ERC721 = artifacts.require("ERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721', (accounts) => {
	it('test for ERC721', async () => {
		const contractXoFATjo = await ERC721.new({from: accounts[1]});
		const tokenIdgbN0Ejt = BigInt("1202")
		const tougUFdAz = accounts[0]
		const operator4AtAuH = accounts[1]
		const ownerTCJ6fgi = "0x0000000000000000000000000000000000000001"
		const tokenIdi0iy0jP = BigInt("314")
		const operatorip8Pg26 = accounts[4]
		const ownerLrx3jA8 = accounts[3]
		const tokenId8bmrZN = BigInt("2031")
		await contractXoFATjo.approve.call(tougUFdAz, tokenIdgbN0Ejt, {from: accounts[4]});
		const nullwJ20pY0 = await contractXoFATjo.isApprovedForAll.call(ownerTCJ6fgi, operator4AtAuH, {from: accounts[3]});
		const null0NLCbh = await contractXoFATjo.ownerOf.call(tokenIdi0iy0jP, {from: accounts[1]});
		const nullIZ7gdtz = await contractXoFATjo.isApprovedForAll.call(ownerLrx3jA8, operatorip8Pg26, {from: accounts[4]});
		const nullbqpuk8R = await contractXoFATjo.ownerOf.call(tokenId8bmrZN, {from: accounts[1]});

		await expect(contractXoFATjo.approve.call(tougUFdAz, tokenIdgbN0Ejt, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractsZU74Ky = await ERC721.new({from: accounts[5]});
		const tokenIdoDNC37T = BigInt("1557")
		const tokgAzBqH = accounts[3]
		const fromxcdgXqq = "0x0000000000000000000000000000000000000001"
		const tokenIdK54zCsn = BigInt("1289")
		const _datatj1WLBx = "0x08110b0419080b"
		const tokenIdE5y7IS4 = BigInt("679")
		const toZsdgGZ = accounts[2]
		const fromP9ZL9ud = accounts[1]
		const operatorBbBiWXp = accounts[3]
		const ownercwgTfVk = accounts[3]
		const tokenIdCdrYB2g = BigInt("126")
		await contractsZU74Ky.transferFrom.call(fromxcdgXqq, tokgAzBqH, tokenIdoDNC37T, {from: accounts[1]});
		const null0q1K4M = await contractsZU74Ky.getApproved.call(tokenIdK54zCsn, {from: "0x0000000000000000000000000000000000000001"});
		await contractsZU74Ky.safeTransferFrom.call(fromP9ZL9ud, toZsdgGZ, tokenIdE5y7IS4, _datatj1WLBx, {from: accounts[2]});
		const nullJ10Zdew = await contractsZU74Ky.isApprovedForAll.call(ownercwgTfVk, operatorBbBiWXp, {from: accounts[4]});
		const nulldUU2wR = await contractsZU74Ky.getApproved.call(tokenIdCdrYB2g, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractsZU74Ky.transferFrom.call(fromxcdgXqq, tokgAzBqH, tokenIdoDNC37T, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractdFiLcz = await ERC721.new({from: accounts[3]});
		const tokenIdAdyhXS = BigInt("1055")
		const tokenIdnTzX2gM = BigInt("1058")
		const toQeNwTo6 = "0x0000000000000000000000000000000000000001"
		const operatoriavshm = accounts[5]
		const ownernWFEB6r = accounts[4]
		const tokenIdLklCGwo = BigInt("1599")
		const toFkZQjLE = accounts[0]
		const fromnIYaTPI = accounts[3]
		const nullzKoQ51M = await contractdFiLcz.getApproved.call(tokenIdAdyhXS, {from: accounts[4]});
		await contractdFiLcz.approve.call(toQeNwTo6, tokenIdnTzX2gM, {from: accounts[0]});
		const nullXVXJFjK = await contractdFiLcz.isApprovedForAll.call(ownernWFEB6r, operatoriavshm, {from: accounts[1]});
		await contractdFiLcz.transferFrom.call(fromnIYaTPI, toFkZQjLE, tokenIdLklCGwo, {from: accounts[0]});

		await expect(contractdFiLcz.getApproved.call(tokenIdAdyhXS, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractxGVfUfP = await ERC721.new({from: accounts[0]});
		const tokenIdNgB6GX7 = BigInt("1415")
		const toV9tTPYp = accounts[1]
		const fromY7szrqn = accounts[3]
		const tokenIdpzujZX4 = BigInt("1925")
		const tokenIdCfoVEuj = BigInt("1915")
		const _dataFInK8e = "0x0603101b0605051407021a2019020f031804160303"
		const tokenIdxnmFOu = BigInt("200")
		const tojzV3AZS = accounts[3]
		const fromdSSk6N = accounts[2]
		await contractxGVfUfP.safeTransferFrom.call(fromY7szrqn, toV9tTPYp, tokenIdNgB6GX7, {from: "0x0000000000000000000000000000000000000001"});
		const nullKwX7qA3 = await contractxGVfUfP.ownerOf.call(tokenIdpzujZX4, {from: accounts[2]});
		const nulligRF9ba = await contractxGVfUfP.ownerOf.call(tokenIdCfoVEuj, {from: "0x0000000000000000000000000000000000000001"});
		await contractxGVfUfP.safeTransferFrom.call(fromdSSk6N, tojzV3AZS, tokenIdxnmFOu, _dataFInK8e, {from: accounts[3]});

		await expect(contractxGVfUfP.safeTransferFrom.call(fromY7szrqn, toV9tTPYp, tokenIdNgB6GX7, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractuVkh60T = await ERC721.new({from: accounts[0]});
		const approvedJmUYlG9 = true
		const toWlUnKQs = accounts[3]
		const tokenId0iPvZb = BigInt("168")
		const tokenIdJvelyjQ = BigInt("1820")
		const operatorJpYkfD4 = accounts[4]
		const ownerHifluoG = accounts[3]
		await contractuVkh60T.setApprovalForAll.call(toWlUnKQs, approvedJmUYlG9, {from: accounts[4]});
		const null0BinPd = await contractuVkh60T.ownerOf.call(tokenId0iPvZb, {from: accounts[0]});
		const nullDgtGf2m = await contractuVkh60T.getApproved.call(tokenIdJvelyjQ, {from: accounts[0]});
		const nullux9e3yi = await contractuVkh60T.isApprovedForAll.call(ownerHifluoG, operatorJpYkfD4, {from: accounts[0]});

		await expect(contractuVkh60T.setApprovalForAll.call(toWlUnKQs, approvedJmUYlG9, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractxNboi8T = await ERC721.new({from: accounts[4]});
		const ownerx97EHDB = accounts[2]
		const approvednENKZ9 = false
		const toZt4B9m8 = accounts[5]
		const nullFWQvNxf = await contractxNboi8T.balanceOf.call(ownerx97EHDB, {from: accounts[2]});
		await contractxNboi8T.setApprovalForAll.call(toZt4B9m8, approvednENKZ9, {from: accounts[3]});

		assert.equal(nullFWQvNxf, 0)
	});

	it('test for ERC721', async () => {
		const contractehr5iNj = await ERC721.new({from: accounts[0]});
		const operator9xfDnf = accounts[5]
		const ownerBHKgh0I = accounts[3]
		const nullEX38QBL = await contractehr5iNj.isApprovedForAll.call(ownerBHKgh0I, operator9xfDnf, {from: accounts[0]});

		assert.equal(nullEX38QBL, false)
	});

	it('test for ERC721', async () => {
		const contractd273N9n = await ERC721.new({from: "0x0000000000000000000000000000000000000001"});
		const tokenIde7l2l8J = BigInt("1245")
		const tomdBWcBs = accounts[1]
		const frompfNE2jN = accounts[1]
		const operatori6dQQbL = "0x0000000000000000000000000000000000000001"
		const ownerqsBSitX = accounts[3]
		const tokenIdRdFfweF = BigInt("596")
		const toaOobrTI = accounts[2]
		const operatorPPVv02V = accounts[0]
		const ownerUa8BdaJ = accounts[0]
		const operatorpJAi4Na = accounts[4]
		const ownerIrSNwL = accounts[3]
		await contractd273N9n.safeTransferFrom.call(frompfNE2jN, tomdBWcBs, tokenIde7l2l8J, {from: accounts[2]});
		const nullUrCYNnD = await contractd273N9n.isApprovedForAll.call(ownerqsBSitX, operatori6dQQbL, {from: accounts[2]});
		await contractd273N9n.approve.call(toaOobrTI, tokenIdRdFfweF, {from: accounts[0]});
		const nullNndD5rj = await contractd273N9n.isApprovedForAll.call(ownerUa8BdaJ, operatorPPVv02V, {from: accounts[5]});
		const nullzddRZwa = await contractd273N9n.isApprovedForAll.call(ownerIrSNwL, operatorpJAi4Na, {from: accounts[3]});
	});

	it('test for ERC721', async () => {
		const contracto8rxzhv = await ERC721.new({from: accounts[0]});
		const approvedDllZci = false
		const toHrRNcQY = accounts[1]
		const tokenIdtBiDeCg = BigInt("1921")
		const tomwddpzw = accounts[4]
		const operatorGEX8zW = accounts[5]
		const ownersz55BHh = accounts[4]
		const approvedfksNOWj = false
		const toOSv0Ml = accounts[2]
		const tokenIdVcjoKwE = BigInt("1147")
		const todnds7lC = accounts[2]
		await contracto8rxzhv.setApprovalForAll.call(toHrRNcQY, approvedDllZci, {from: accounts[1]});
		await contracto8rxzhv.approve.call(tomwddpzw, tokenIdtBiDeCg, {from: accounts[1]});
		const nullC8A3xP = await contracto8rxzhv.isApprovedForAll.call(ownersz55BHh, operatorGEX8zW, {from: accounts[0]});
		await contracto8rxzhv.setApprovalForAll.call(toOSv0Ml, approvedfksNOWj, {from: accounts[4]});
		await contracto8rxzhv.approve.call(todnds7lC, tokenIdVcjoKwE, {from: accounts[3]});

		await expect(contracto8rxzhv.setApprovalForAll.call(toHrRNcQY, approvedDllZci, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})