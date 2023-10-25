const ERC721 = artifacts.require("ERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721', (accounts) => {
	it('test for ERC721', async () => {
		const contractfY9Kys = await ERC721.new({from: accounts[4]});
		const tokenIdlOW9oQa = BigInt("1044")
		const tokenIdwYzWq4X = BigInt("1005")
		const ownerAkz8TCa = accounts[1]
		const tokenIdMngZFZz = BigInt("588")
		const tosASbygv = accounts[0]
		const fromjEdFSwr = accounts[3]
		const tokenId0KH40g = BigInt("1818")
		const tolKBhzZG = accounts[0]
		const nullzx4fibf = await contractfY9Kys.getApproved.call(tokenIdlOW9oQa, {from: accounts[1]});
		const nullZ6CEsx = await contractfY9Kys.getApproved.call(tokenIdwYzWq4X, {from: accounts[0]});
		const nullmPWIzzC = await contractfY9Kys.balanceOf.call(ownerAkz8TCa, {from: accounts[5]});
		await contractfY9Kys.transferFrom.call(fromjEdFSwr, tosASbygv, tokenIdMngZFZz, {from: accounts[3]});
		await contractfY9Kys.approve.call(tolKBhzZG, tokenId0KH40g, {from: accounts[4]});

		await expect(contractfY9Kys.getApproved.call(tokenIdlOW9oQa, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractvKF1u80 = await ERC721.new({from: accounts[0]});
		const tokenIdLYpPajO = BigInt("1544")
		const toxwUL54X = accounts[2]
		const fromt4wpfiL = accounts[3]
		const tokenIdyfcxelo = BigInt("954")
		const toNiYZNl3 = accounts[2]
		const fromCLpkxnw = accounts[4]
		const tokenIdyYZtmfM = BigInt("424")
		const toKR4wz2b = accounts[5]
		const from8XJa3N = accounts[3]
		await contractvKF1u80.safeTransferFrom.call(fromt4wpfiL, toxwUL54X, tokenIdLYpPajO, {from: accounts[1]});
		await contractvKF1u80.safeTransferFrom.call(fromCLpkxnw, toNiYZNl3, tokenIdyfcxelo, {from: accounts[1]});
		await contractvKF1u80.transferFrom.call(from8XJa3N, toKR4wz2b, tokenIdyYZtmfM, {from: accounts[1]});

		await expect(contractvKF1u80.safeTransferFrom.call(fromt4wpfiL, toxwUL54X, tokenIdLYpPajO, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractfK9ZGN3 = await ERC721.new({from: accounts[0]});
		const tokenIduRvJImC = BigInt("1210")
		const toNi74LBw = accounts[4]
		const operatoryoRT2x = accounts[3]
		const ownerIpSs8ZF = accounts[1]
		await contractfK9ZGN3.approve.call(toNi74LBw, tokenIduRvJImC, {from: accounts[4]});
		const nullPUyiw06 = await contractfK9ZGN3.isApprovedForAll.call(ownerIpSs8ZF, operatoryoRT2x, {from: accounts[1]});

		await expect(contractfK9ZGN3.approve.call(toNi74LBw, tokenIduRvJImC, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractXK69gs5 = await ERC721.new({from: accounts[3]});
		const approvedG1b6NR = false
		const tohsPlByw = accounts[1]
		const tokenIdJTvzxG = BigInt("239")
		const tokenIdx5P3tVe = BigInt("834")
		const toWwDq3wf = accounts[0]
		const tokenIdvVPyxSr = BigInt("1714")
		const torIwTJCz = accounts[0]
		const tokenIddqy4Qg4 = BigInt("146")
		const tow1qhaJ = accounts[5]
		const fromfbuSELQ = accounts[3]
		const operatorhWoFWCQ = accounts[3]
		const ownerUwxvaVS = accounts[2]
		await contractXK69gs5.setApprovalForAll.call(tohsPlByw, approvedG1b6NR, {from: accounts[4]});
		const nullptluvcD = await contractXK69gs5.ownerOf.call(tokenIdJTvzxG, {from: accounts[0]});
		await contractXK69gs5.approve.call(toWwDq3wf, tokenIdx5P3tVe, {from: accounts[4]});
		await contractXK69gs5.approve.call(torIwTJCz, tokenIdvVPyxSr, {from: "0x0000000000000000000000000000000000000001"});
		await contractXK69gs5.safeTransferFrom.call(fromfbuSELQ, tow1qhaJ, tokenIddqy4Qg4, {from: accounts[4]});
		const nulleVfqDj0 = await contractXK69gs5.isApprovedForAll.call(ownerUwxvaVS, operatorhWoFWCQ, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractXK69gs5.setApprovalForAll.call(tohsPlByw, approvedG1b6NR, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractA6eiues = await ERC721.new({from: accounts[5]});
		const owneruRzyLAs = accounts[1]
		const tokenIdDEUYWDt = BigInt("590")
		const toTTcI7QS = accounts[2]
		const approvedjyaZRC0 = false
		const topBbKwHx = accounts[1]
		const nullZBmr10B = await contractA6eiues.balanceOf.call(owneruRzyLAs, {from: accounts[2]});
		await contractA6eiues.approve.call(toTTcI7QS, tokenIdDEUYWDt, {from: accounts[0]});
		await contractA6eiues.setApprovalForAll.call(topBbKwHx, approvedjyaZRC0, {from: accounts[4]});

		assert.equal(nullZBmr10B, 0)
		await expect(contractA6eiues.approve.call(toTTcI7QS, tokenIdDEUYWDt, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractFBQj2a3 = await ERC721.new({from: accounts[0]});
		const operatorYquIruk = accounts[1]
		const ownerSZ9roB = accounts[0]
		const tokenIdnJtNINM = BigInt("1887")
		const tokenIdOMwaVsx = BigInt("1402")
		const to37XOcw = accounts[0]
		const nullrIQw3e = await contractFBQj2a3.isApprovedForAll.call(ownerSZ9roB, operatorYquIruk, {from: accounts[3]});
		const nullZaBeW4q = await contractFBQj2a3.getApproved.call(tokenIdnJtNINM, {from: accounts[5]});
		await contractFBQj2a3.approve.call(to37XOcw, tokenIdOMwaVsx, {from: accounts[4]});

		assert.equal(nullrIQw3e, false)
		await expect(contractFBQj2a3.getApproved.call(tokenIdnJtNINM, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractMtMY3k7 = await ERC721.new({from: accounts[5]});
		const approvedMlGyBop = true
		const toj9Dd5M2 = accounts[2]
		const tokenIdk9lldqo = BigInt("1995")
		const tokenIdzU1IetB = BigInt("997")
		const tovqXTgsu = accounts[3]
		const fromhMwuT4r = accounts[3]
		await contractMtMY3k7.setApprovalForAll.call(toj9Dd5M2, approvedMlGyBop, {from: accounts[2]});
		const nullbRnA54 = await contractMtMY3k7.getApproved.call(tokenIdk9lldqo, {from: accounts[2]});
		await contractMtMY3k7.transferFrom.call(fromhMwuT4r, tovqXTgsu, tokenIdzU1IetB, {from: accounts[3]});

		await expect(contractMtMY3k7.setApprovalForAll.call(toj9Dd5M2, approvedMlGyBop, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractI2Kan8G = await ERC721.new({from: accounts[0]});
		const tokenIdoOcaUF8 = BigInt("1591")
		const togrwUlpf = accounts[4]
		const fromu7EVnCC = accounts[4]
		const tokenIdHBzOVjv = BigInt("1250")
		const toSXK8PSK = accounts[4]
		await contractI2Kan8G.transferFrom.call(fromu7EVnCC, togrwUlpf, tokenIdoOcaUF8, {from: accounts[3]});
		await contractI2Kan8G.approve.call(toSXK8PSK, tokenIdHBzOVjv, {from: accounts[4]});

		await expect(contractI2Kan8G.transferFrom.call(fromu7EVnCC, togrwUlpf, tokenIdoOcaUF8, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractD9V775o = await ERC721.new({from: "0x0000000000000000000000000000000000000001"});
		const tokenIdPDjVEBi = BigInt("1959")
		const toQ48cDzB = "0x0000000000000000000000000000000000000001"
		const _dataKmKwLk9 = "0x040e17141316141410200908071115101411160e151316010d141c1614"
		const tokenIdeIPEs5Z = BigInt("996")
		const toAWGjL5f = "0x0000000000000000000000000000000000000001"
		const fromti59uTX = accounts[3]
		const tokenIdIy0no9x = BigInt("130")
		const _dataOE49VkF = "0x1313"
		const tokenIdgKPexeW = BigInt("1739")
		const tohI1Suqy = accounts[3]
		const fromfBzJGbB = accounts[4]
		const tokenIdmXMoEDS = BigInt("743")
		const toaMNW3sG = accounts[2]
		const fromDcvojQ3 = accounts[1]
		const operatorBjrQl6 = accounts[0]
		const ownerOM4k8x = accounts[3]
		await contractD9V775o.approve.call(toQ48cDzB, tokenIdPDjVEBi, {from: accounts[0]});
		await contractD9V775o.safeTransferFrom.call(fromti59uTX, toAWGjL5f, tokenIdeIPEs5Z, _dataKmKwLk9, {from: accounts[3]});
		const nullVYRSlZ4 = await contractD9V775o.getApproved.call(tokenIdIy0no9x, {from: accounts[3]});
		await contractD9V775o.safeTransferFrom.call(fromfBzJGbB, tohI1Suqy, tokenIdgKPexeW, _dataOE49VkF, {from: accounts[0]});
		await contractD9V775o.safeTransferFrom.call(fromDcvojQ3, toaMNW3sG, tokenIdmXMoEDS, {from: accounts[4]});
		const nullpPl8FkB = await contractD9V775o.isApprovedForAll.call(ownerOM4k8x, operatorBjrQl6, {from: accounts[2]});
	});
})