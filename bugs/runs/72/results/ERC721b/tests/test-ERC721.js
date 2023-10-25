const ERC721 = artifacts.require("ERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721', (accounts) => {
	it('test for ERC721', async () => {
		const contractiRmUlY = await ERC721.new({from: accounts[0]});
		const tokenIdNpaLQFO = BigInt("77")
		const todXfirI1 = accounts[0]
		const approvedHlAig2a = true
		const tom0C0pcm = accounts[2]
		const tokenIda0QW1QN = BigInt("538")
		const tokenIdk8YGPLr = BigInt("542")
		const toSpbFBqW = accounts[5]
		await contractiRmUlY.approve.call(todXfirI1, tokenIdNpaLQFO, {from: accounts[1]});
		await contractiRmUlY.setApprovalForAll.call(tom0C0pcm, approvedHlAig2a, {from: accounts[2]});
		const nulljxL73YQ = await contractiRmUlY.getApproved.call(tokenIda0QW1QN, {from: accounts[2]});
		await contractiRmUlY.approve.call(toSpbFBqW, tokenIdk8YGPLr, {from: accounts[3]});

		await expect(contractiRmUlY.approve.call(todXfirI1, tokenIdNpaLQFO, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractpMPEscP = await ERC721.new({from: accounts[5]});
		const operatorJOs7YBw = accounts[5]
		const ownerfLUdcZX = accounts[2]
		const tokenIdgA5ku1m = BigInt("484")
		const toqzlwD0 = accounts[1]
		const approvedjN5OsTn = false
		const topXozw9X = accounts[4]
		const _dataCH9opEp = "0x190a001e0a0d1d100d130815180b1e181d0311061b"
		const tokenIdfjj7LuE = BigInt("583")
		const toFeofZy = accounts[0]
		const fromTuU5bq9 = accounts[4]
		const nullqu0ikd3 = await contractpMPEscP.isApprovedForAll.call(ownerfLUdcZX, operatorJOs7YBw, {from: accounts[1]});
		await contractpMPEscP.approve.call(toqzlwD0, tokenIdgA5ku1m, {from: accounts[5]});
		await contractpMPEscP.setApprovalForAll.call(topXozw9X, approvedjN5OsTn, {from: accounts[0]});
		await contractpMPEscP.safeTransferFrom.call(fromTuU5bq9, toFeofZy, tokenIdfjj7LuE, _dataCH9opEp, {from: accounts[0]});

		assert.equal(nullqu0ikd3, false)
		await expect(contractpMPEscP.approve.call(toqzlwD0, tokenIdgA5ku1m, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractUJz5u5 = await ERC721.new({from: accounts[1]});
		const _dataZdyewty = "0x180e02141903070a1a051b0f170818010b070c1f0e1a"
		const tokenIdTY97IY = BigInt("695")
		const towREYbIO = accounts[0]
		const fromyClFBeO = "0x0000000000000000000000000000000000000001"
		const operatormt5QEQC = accounts[2]
		const ownerVwMKVcy = accounts[0]
		const _dataDlJ5xS = "0x0f04091a0c0318031b1501181917080f0f0c0d0c01060c0808150f100705"
		const tokenId7MeR2N = BigInt("1538")
		const toGGn0af3 = accounts[4]
		const from85Zae7 = accounts[2]
		const tokenIdz4je0aQ = BigInt("1431")
		const toQhZOUUs = accounts[3]
		const fromwYO94RA = accounts[1]
		await contractUJz5u5.safeTransferFrom.call(fromyClFBeO, towREYbIO, tokenIdTY97IY, _dataZdyewty, {from: accounts[3]});
		const nullhWZmWGv = await contractUJz5u5.isApprovedForAll.call(ownerVwMKVcy, operatormt5QEQC, {from: "0x0000000000000000000000000000000000000001"});
		await contractUJz5u5.safeTransferFrom.call(from85Zae7, toGGn0af3, tokenId7MeR2N, _dataDlJ5xS, {from: accounts[3]});
		await contractUJz5u5.safeTransferFrom.call(fromwYO94RA, toQhZOUUs, tokenIdz4je0aQ, {from: accounts[2]});

		await expect(contractUJz5u5.safeTransferFrom.call(fromyClFBeO, towREYbIO, tokenIdTY97IY, _dataZdyewty, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractIutS0md = await ERC721.new({from: "0x0000000000000000000000000000000000000001"});
		const tokenIdrAihgTE = BigInt("372")
		const tofDVTqvX = "0x0000000000000000000000000000000000000001"
		const fromcgQKfRr = accounts[3]
		const _dataW8yaCoc = "0x1116140d0d111e100d1b121a"
		const tokenIdOI6jhz = BigInt("2035")
		const toctZZ13R = accounts[4]
		const fromOmEbsvN = accounts[3]
		const operatorAvToBSS = accounts[1]
		const ownerZBZY3h8 = accounts[2]
		const ownerWFw5Kb9 = accounts[1]
		await contractIutS0md.transferFrom.call(fromcgQKfRr, tofDVTqvX, tokenIdrAihgTE, {from: accounts[4]});
		await contractIutS0md.safeTransferFrom.call(fromOmEbsvN, toctZZ13R, tokenIdOI6jhz, _dataW8yaCoc, {from: accounts[2]});
		const nullHJ5ZF9M = await contractIutS0md.isApprovedForAll.call(ownerZBZY3h8, operatorAvToBSS, {from: accounts[1]});
		const nullY0QNRX = await contractIutS0md.balanceOf.call(ownerWFw5Kb9, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for ERC721', async () => {
		const contractqysBLjY = await ERC721.new({from: accounts[4]});
		const approvedkIbjHhf = false
		const toZxVJgmZ = accounts[1]
		const _dataguC22V = "0x041518100b06131a1b07111c160809081109100e1803200f"
		const tokenIdRSpO30e = BigInt("1038")
		const toccMujQ = accounts[0]
		const frombnP2xn4 = accounts[1]
		const approvedBGM3J3S = false
		const tos8gdZHG = "0x0000000000000000000000000000000000000001"
		await contractqysBLjY.setApprovalForAll.call(toZxVJgmZ, approvedkIbjHhf, {from: accounts[1]});
		await contractqysBLjY.safeTransferFrom.call(frombnP2xn4, toccMujQ, tokenIdRSpO30e, _dataguC22V, {from: accounts[1]});
		await contractqysBLjY.setApprovalForAll.call(tos8gdZHG, approvedBGM3J3S, {from: accounts[3]});

		await expect(contractqysBLjY.setApprovalForAll.call(toZxVJgmZ, approvedkIbjHhf, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractSgYih90 = await ERC721.new({from: accounts[4]});
		const tokenIdeODeE3e = BigInt("1088")
		const tokenIdacpWuGU = BigInt("202")
		const toAkHHOKn = accounts[1]
		const fromUSoovaP = accounts[1]
		const approvedBLxsJDE = true
		const tojO9I6R9 = accounts[3]
		const operatorZ4P7S5M = accounts[3]
		const ownerNY1809f = accounts[0]
		const _data1mUqYX = "0x070e021e16120a"
		const tokenIdaMit2zX = BigInt("50")
		const todsburwJ = accounts[0]
		const fromw1K99Lz = accounts[2]
		const owneru1UTbWQ = accounts[5]
		const nulld0zQIWf = await contractSgYih90.getApproved.call(tokenIdeODeE3e, {from: accounts[3]});
		await contractSgYih90.safeTransferFrom.call(fromUSoovaP, toAkHHOKn, tokenIdacpWuGU, {from: accounts[4]});
		await contractSgYih90.setApprovalForAll.call(tojO9I6R9, approvedBLxsJDE, {from: accounts[3]});
		const nulltp9R1Kf = await contractSgYih90.isApprovedForAll.call(ownerNY1809f, operatorZ4P7S5M, {from: accounts[4]});
		await contractSgYih90.safeTransferFrom.call(fromw1K99Lz, todsburwJ, tokenIdaMit2zX, _data1mUqYX, {from: accounts[0]});
		const nullAq2dMeh = await contractSgYih90.balanceOf.call(owneru1UTbWQ, {from: accounts[2]});

		await expect(contractSgYih90.getApproved.call(tokenIdeODeE3e, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractxGCkz35 = await ERC721.new({from: accounts[4]});
		const tokenIdGN0B3mO = BigInt("1279")
		const toOF5kZcD = "0x0000000000000000000000000000000000000001"
		const fromguVCjqv = accounts[2]
		const tokenIdre1XRpc = BigInt("197")
		const tokenIdTS9Ep7C = BigInt("759")
		const tokenIddhSjbzY = BigInt("1974")
		const toTKWMDYN = "0x0000000000000000000000000000000000000001"
		await contractxGCkz35.transferFrom.call(fromguVCjqv, toOF5kZcD, tokenIdGN0B3mO, {from: accounts[5]});
		const nullUQ51mv = await contractxGCkz35.getApproved.call(tokenIdre1XRpc, {from: accounts[2]});
		const nullAB2R0s = await contractxGCkz35.getApproved.call(tokenIdTS9Ep7C, {from: accounts[2]});
		await contractxGCkz35.approve.call(toTKWMDYN, tokenIddhSjbzY, {from: accounts[2]});

		await expect(contractxGCkz35.transferFrom.call(fromguVCjqv, toOF5kZcD, tokenIdGN0B3mO, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractQWBbRJV = await ERC721.new({from: accounts[5]});
		const tokenIdaIGHpcP = BigInt("75")
		const toGHRFYlQ = accounts[1]
		const fromX29gXcq = accounts[0]
		const operatorqzCYioC = "0x0000000000000000000000000000000000000001"
		const ownerVQpafbr = accounts[4]
		const tokenIde82FSSh = BigInt("1603")
		const touKJve3z = accounts[3]
		const tokenIdMkM8JS = BigInt("949")
		const toaMjjpYm = accounts[3]
		const tokenIdKw2kOdg = BigInt("1993")
		const toivhoU0g = accounts[0]
		const fromtuHMCd = accounts[0]
		await contractQWBbRJV.safeTransferFrom.call(fromX29gXcq, toGHRFYlQ, tokenIdaIGHpcP, {from: accounts[1]});
		const nullDVkOCS9 = await contractQWBbRJV.isApprovedForAll.call(ownerVQpafbr, operatorqzCYioC, {from: accounts[2]});
		await contractQWBbRJV.approve.call(touKJve3z, tokenIde82FSSh, {from: accounts[1]});
		await contractQWBbRJV.approve.call(toaMjjpYm, tokenIdMkM8JS, {from: accounts[5]});
		await contractQWBbRJV.transferFrom.call(fromtuHMCd, toivhoU0g, tokenIdKw2kOdg, {from: accounts[1]});

		await expect(contractQWBbRJV.safeTransferFrom.call(fromX29gXcq, toGHRFYlQ, tokenIdaIGHpcP, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractnxVagcl = await ERC721.new({from: accounts[4]});
		const approvedq28WZRG = false
		const tohfM46S = accounts[2]
		const approvedA8F8QM = false
		const toqIj0sZf = "0x0000000000000000000000000000000000000001"
		await contractnxVagcl.setApprovalForAll.call(tohfM46S, approvedq28WZRG, {from: accounts[1]});
		await contractnxVagcl.setApprovalForAll.call(toqIj0sZf, approvedA8F8QM, {from: accounts[3]});
	});

	it('test for ERC721', async () => {
		const contractXlV1Ecu = await ERC721.new({from: accounts[5]});
		const ownerYf2JgqO = accounts[4]
		const tokenIdhrb2wv = BigInt("561")
		const toZSBZGMH = accounts[3]
		const fromQWoYBZs = accounts[1]
		const operatorbJotkuE = accounts[0]
		const ownernWJMZCI = "0x0000000000000000000000000000000000000001"
		const tokenIdKK2XpJd = BigInt("484")
		const toUKM7Q1g = accounts[2]
		const nullMB01FbW = await contractXlV1Ecu.balanceOf.call(ownerYf2JgqO, {from: accounts[5]});
		await contractXlV1Ecu.transferFrom.call(fromQWoYBZs, toZSBZGMH, tokenIdhrb2wv, {from: accounts[2]});
		const nullm2bBz1w = await contractXlV1Ecu.isApprovedForAll.call(ownernWJMZCI, operatorbJotkuE, {from: accounts[2]});
		await contractXlV1Ecu.approve.call(toUKM7Q1g, tokenIdKK2XpJd, {from: accounts[5]});

		assert.equal(nullMB01FbW, 0)
		await expect(contractXlV1Ecu.transferFrom.call(fromQWoYBZs, toZSBZGMH, tokenIdhrb2wv, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractr6md4dm = await ERC721.new({from: accounts[4]});
		const tokenIdKFpP2XD = BigInt("1282")
		const tonq8kPa = "0x00000000000000000000000000000000000000-1"
		const fromj3knrP5 = accounts[2]
		const tokenIdD26yrn = BigInt("1578")
		const toDuKs0Y = accounts[1]
		const fromPCtGOL8 = accounts[1]
		await contractr6md4dm.transferFrom.call(fromj3knrP5, tonq8kPa, tokenIdKFpP2XD, {from: accounts[5]});
		await contractr6md4dm.transferFrom.call(fromPCtGOL8, toDuKs0Y, tokenIdD26yrn, {from: accounts[1]});

		await expect(contractr6md4dm.transferFrom.call(fromj3knrP5, tonq8kPa, tokenIdKFpP2XD, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})