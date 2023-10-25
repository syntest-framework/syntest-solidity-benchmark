const ERC721 = artifacts.require("ERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721', (accounts) => {
	it('test for ERC721', async () => {
		const contractiiz89U3 = await ERC721.new({from: accounts[5]});
		const tokenIdQzDS5Z6 = BigInt("411")
		const towNLiudR = accounts[4]
		const tokenIdk25LvL4 = BigInt("1131")
		const ownerQu9a2N = accounts[2]
		const tokenIdOEPlFZR = BigInt("1413")
		const toZZXtQn1 = accounts[4]
		const tokenIdooxsL0 = BigInt("285")
		const toxqq4wka = accounts[0]
		await contractiiz89U3.approve.call(towNLiudR, tokenIdQzDS5Z6, {from: "0x0000000000000000000000000000000000000001"});
		const nullWXucwW = await contractiiz89U3.ownerOf.call(tokenIdk25LvL4, {from: accounts[2]});
		const nulliHRnAKZ = await contractiiz89U3.balanceOf.call(ownerQu9a2N, {from: accounts[4]});
		await contractiiz89U3.approve.call(toZZXtQn1, tokenIdOEPlFZR, {from: accounts[4]});
		await contractiiz89U3.approve.call(toxqq4wka, tokenIdooxsL0, {from: accounts[4]});

		await expect(contractiiz89U3.approve.call(towNLiudR, tokenIdQzDS5Z6, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractaXiVUQm = await ERC721.new({from: accounts[2]});
		const tokenIdU1DNtnM = BigInt("1023")
		const tokenIdcG8PHxP = BigInt("2009")
		const toHj8JjVs = "0x0000000000000000000000000000000000000001"
		const fromCvTG5y = "0x0000000000000000000000000000000000000001"
		const tokenIdOZzUVD5 = BigInt("1922")
		const nulluRyOoXb = await contractaXiVUQm.getApproved.call(tokenIdU1DNtnM, {from: accounts[1]});
		await contractaXiVUQm.transferFrom.call(fromCvTG5y, toHj8JjVs, tokenIdcG8PHxP, {from: accounts[1]});
		const nullvIGByie = await contractaXiVUQm.getApproved.call(tokenIdOZzUVD5, {from: accounts[1]});

		await expect(contractaXiVUQm.getApproved.call(tokenIdU1DNtnM, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractmuxF3Jl = await ERC721.new({from: "0x0000000000000000000000000000000000000001"});
		const tokenIdn2ZYXAc = BigInt("1564")
		const toCEw0d5 = accounts[3]
		const fromu6SRFWd = accounts[3]
		const tokenIdRMEIHxj = BigInt("622")
		const tochTzeh = accounts[0]
		const fromH6VqDkA = accounts[1]
		const tokenIdLoNrLmX = BigInt("457")
		const toFAuxpJW = accounts[4]
		const fromEXzwmnt = accounts[0]
		const tokenIdqHMYuBu = BigInt("1457")
		const tos9W4cKY = accounts[2]
		const fromPSfJjW7 = "0x0000000000000000000000000000000000000001"
		await contractmuxF3Jl.transferFrom.call(fromu6SRFWd, toCEw0d5, tokenIdn2ZYXAc, {from: "0x0000000000000000000000000000000000000001"});
		await contractmuxF3Jl.transferFrom.call(fromH6VqDkA, tochTzeh, tokenIdRMEIHxj, {from: accounts[0]});
		await contractmuxF3Jl.transferFrom.call(fromEXzwmnt, toFAuxpJW, tokenIdLoNrLmX, {from: accounts[1]});
		await contractmuxF3Jl.safeTransferFrom.call(fromPSfJjW7, tos9W4cKY, tokenIdqHMYuBu, {from: accounts[4]});
	});

	it('test for ERC721', async () => {
		const contractIMiQpWD = await ERC721.new({from: accounts[3]});
		const approvedEF83Y2 = true
		const toy1I6gOW = accounts[5]
		const _datald5rvWh = "0x0b1d1c0d0514140212120b191e11111c121411"
		const tokenIdVuusRK3 = BigInt("1163")
		const toSgSOsWU = accounts[2]
		const fromQvVFXXD = accounts[2]
		const tokenIdboknkb1 = BigInt("88")
		const toZnb26Yc = accounts[2]
		const fromlvwDG40 = accounts[2]
		const tokenIdrzHWK3 = BigInt("1477")
		const tokenIdE7ezjRF = BigInt("574")
		const toa8x4AU = accounts[4]
		const froma9pebSa = accounts[1]
		await contractIMiQpWD.setApprovalForAll.call(toy1I6gOW, approvedEF83Y2, {from: accounts[4]});
		await contractIMiQpWD.safeTransferFrom.call(fromQvVFXXD, toSgSOsWU, tokenIdVuusRK3, _datald5rvWh, {from: accounts[4]});
		await contractIMiQpWD.transferFrom.call(fromlvwDG40, toZnb26Yc, tokenIdboknkb1, {from: "0x0000000000000000000000000000000000000001"});
		const nullOzFl5mE = await contractIMiQpWD.ownerOf.call(tokenIdrzHWK3, {from: accounts[3]});
		await contractIMiQpWD.safeTransferFrom.call(froma9pebSa, toa8x4AU, tokenIdE7ezjRF, {from: accounts[3]});

		await expect(contractIMiQpWD.setApprovalForAll.call(toy1I6gOW, approvedEF83Y2, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractvjqwnO = await ERC721.new({from: accounts[5]});
		const approvedNlT5LC0 = false
		const toVWjVQtw = accounts[0]
		const tokenIdXRLUMQ = BigInt("361")
		const toC13ESNu = "0x0000000000000000000000000000000000000001"
		const approvedTH3CjtL = false
		const toq2lfDNO = "0x0000000000000000000000000000000000000001"
		const tokenIdL036K3S = BigInt("441")
		await contractvjqwnO.setApprovalForAll.call(toVWjVQtw, approvedNlT5LC0, {from: accounts[0]});
		await contractvjqwnO.approve.call(toC13ESNu, tokenIdXRLUMQ, {from: accounts[2]});
		await contractvjqwnO.setApprovalForAll.call(toq2lfDNO, approvedTH3CjtL, {from: accounts[3]});
		const nullFd2fBTc = await contractvjqwnO.getApproved.call(tokenIdL036K3S, {from: accounts[3]});

		await expect(contractvjqwnO.setApprovalForAll.call(toVWjVQtw, approvedNlT5LC0, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})