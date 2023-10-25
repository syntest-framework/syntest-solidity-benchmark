const ERC721 = artifacts.require("ERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721', (accounts) => {
	it('test for ERC721', async () => {
		const contractkX92sZO = await ERC721.new({from: accounts[2]});
		const tokenIdRglfBm = BigInt("1792")
		const toDX0foiw = accounts[4]
		const fromfU4yWui = accounts[0]
		const approvedhlAytRr = true
		const toXLvr6Tm = accounts[3]
		const approvednyMqh5R = true
		const toP9DFTVc = accounts[0]
		const tokenIdhv0ZnTG = BigInt("328")
		const tokyHKJJg = accounts[0]
		const tokenIdwFzx1bi = BigInt("692")
		const tou4GH6Z7 = accounts[0]
		await contractkX92sZO.transferFrom.call(fromfU4yWui, toDX0foiw, tokenIdRglfBm, {from: accounts[4]});
		await contractkX92sZO.setApprovalForAll.call(toXLvr6Tm, approvedhlAytRr, {from: accounts[5]});
		await contractkX92sZO.setApprovalForAll.call(toP9DFTVc, approvednyMqh5R, {from: accounts[3]});
		await contractkX92sZO.approve.call(tokyHKJJg, tokenIdhv0ZnTG, {from: accounts[4]});
		await contractkX92sZO.approve.call(tou4GH6Z7, tokenIdwFzx1bi, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractkX92sZO.transferFrom.call(fromfU4yWui, toDX0foiw, tokenIdRglfBm, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractUALcwS1 = await ERC721.new({from: accounts[0]});
		const tokenIdbHyl87G = BigInt("345")
		const tokenIddbi4qDA = BigInt("1448")
		const toa9mjAFM = accounts[2]
		const tokenIdsgpPc74 = BigInt("1946")
		const toyBtctcS = accounts[4]
		const fromqFLhvtC = accounts[3]
		const tokenIdhHPmb5p = BigInt("946")
		const nullib4LIxx = await contractUALcwS1.getApproved.call(tokenIdbHyl87G, {from: accounts[3]});
		await contractUALcwS1.approve.call(toa9mjAFM, tokenIddbi4qDA, {from: accounts[3]});
		await contractUALcwS1.transferFrom.call(fromqFLhvtC, toyBtctcS, tokenIdsgpPc74, {from: accounts[4]});
		const nullZNyCEB6 = await contractUALcwS1.getApproved.call(tokenIdhHPmb5p, {from: accounts[1]});

		await expect(contractUALcwS1.getApproved.call(tokenIdbHyl87G, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractpuF6tE1 = await ERC721.new({from: accounts[4]});
		const operator9w5Jqh = accounts[2]
		const ownerT51DkZ = accounts[0]
		const tokenIdfidhFgp = BigInt("613")
		const tokenIdmuHd9FD = BigInt("1679")
		const toRyYbg8 = accounts[2]
		const nullzHPU4Bg = await contractpuF6tE1.isApprovedForAll.call(ownerT51DkZ, operator9w5Jqh, {from: "0x0000000000000000000000000000000000000001"});
		const nullB1QOxJd = await contractpuF6tE1.ownerOf.call(tokenIdfidhFgp, {from: accounts[3]});
		await contractpuF6tE1.approve.call(toRyYbg8, tokenIdmuHd9FD, {from: accounts[1]});

		assert.equal(nullzHPU4Bg, false)
		await expect(contractpuF6tE1.ownerOf.call(tokenIdfidhFgp, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractoQ0DiZi = await ERC721.new({from: accounts[5]});
		const approvedE1PA16G = false
		const touI66lYj = accounts[0]
		const approvedY2VQkkD = true
		const to6Lfl4x = accounts[4]
		await contractoQ0DiZi.setApprovalForAll.call(touI66lYj, approvedE1PA16G, {from: accounts[0]});
		await contractoQ0DiZi.setApprovalForAll.call(to6Lfl4x, approvedY2VQkkD, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractoQ0DiZi.setApprovalForAll.call(touI66lYj, approvedE1PA16G, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractgSOJtjw = await ERC721.new({from: "0x0000000000000000000000000000000000000001"});
		const operatordFdVVo = accounts[5]
		const ownerwrDB2uo = accounts[3]
		const operatorQLEUvlG = accounts[2]
		const ownerP5tRA5 = accounts[1]
		const tokenIdn4NtSnJ = BigInt("682")
		const toQzkokd9 = accounts[0]
		const operatorWTb31BZ = accounts[4]
		const ownerUqY9KMH = accounts[1]
		const nulltMnSxPl = await contractgSOJtjw.isApprovedForAll.call(ownerwrDB2uo, operatordFdVVo, {from: accounts[3]});
		const nullhDs4RoA = await contractgSOJtjw.isApprovedForAll.call(ownerP5tRA5, operatorQLEUvlG, {from: accounts[3]});
		await contractgSOJtjw.approve.call(toQzkokd9, tokenIdn4NtSnJ, {from: accounts[3]});
		const nullx19yPed = await contractgSOJtjw.isApprovedForAll.call(ownerUqY9KMH, operatorWTb31BZ, {from: accounts[0]});
	});
})