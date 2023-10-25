const ERC721 = artifacts.require("ERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721', (accounts) => {
	it('test for ERC721', async () => {
		const contracta7pK22J = await ERC721.new({from: accounts[1]});
		const tokenIdoxLoitp = BigInt("772")
		const tofIJsU0T = accounts[2]
		const approvedlxJ7SPm = true
		const toeTHg5dY = accounts[5]
		const tokenIdJxn7yW6 = BigInt("1524")
		const toWkMwBUS = accounts[4]
		const froms1gH9rP = accounts[4]
		await contracta7pK22J.approve.call(tofIJsU0T, tokenIdoxLoitp, {from: accounts[4]});
		await contracta7pK22J.setApprovalForAll.call(toeTHg5dY, approvedlxJ7SPm, {from: accounts[1]});
		await contracta7pK22J.transferFrom.call(froms1gH9rP, toWkMwBUS, tokenIdJxn7yW6, {from: accounts[4]});

		await expect(contracta7pK22J.approve.call(tofIJsU0T, tokenIdoxLoitp, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractJuKZuTw = await ERC721.new({from: accounts[0]});
		const tokenIdipOJ25w = BigInt("80")
		const tokenIdMEarOty = BigInt("1643")
		const toISSMbfA = accounts[1]
		const fromealw5Ul = accounts[3]
		const approvedFug4Iej = true
		const tocShWWyR = accounts[2]
		const approvedxe1EJIj = true
		const toC8FW5wp = accounts[3]
		const tokenIdWwYUuTo = BigInt("1711")
		const toF13sKuJ = accounts[0]
		const nulldpTSdkw = await contractJuKZuTw.getApproved.call(tokenIdipOJ25w, {from: accounts[0]});
		await contractJuKZuTw.safeTransferFrom.call(fromealw5Ul, toISSMbfA, tokenIdMEarOty, {from: accounts[0]});
		await contractJuKZuTw.setApprovalForAll.call(tocShWWyR, approvedFug4Iej, {from: "0x0000000000000000000000000000000000000001"});
		await contractJuKZuTw.setApprovalForAll.call(toC8FW5wp, approvedxe1EJIj, {from: accounts[0]});
		await contractJuKZuTw.approve.call(toF13sKuJ, tokenIdWwYUuTo, {from: accounts[1]});

		await expect(contractJuKZuTw.getApproved.call(tokenIdipOJ25w, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractQuLnfwX = await ERC721.new({from: accounts[0]});
		const tokenIdmApWUxs = BigInt("1485")
		const toInnmi0 = accounts[4]
		const fromSDtf0J = accounts[1]
		const approvedHrJsw8Z = true
		const tohZOIXPq = accounts[0]
		const tokenIdqo6R5s = BigInt("497")
		const tokenIdcXT2YiJ = BigInt("261")
		const tofuCDrS9 = accounts[2]
		await contractQuLnfwX.transferFrom.call(fromSDtf0J, toInnmi0, tokenIdmApWUxs, {from: accounts[0]});
		await contractQuLnfwX.setApprovalForAll.call(tohZOIXPq, approvedHrJsw8Z, {from: accounts[1]});
		const nullUlgmqfD = await contractQuLnfwX.getApproved.call(tokenIdqo6R5s, {from: accounts[2]});
		await contractQuLnfwX.approve.call(tofuCDrS9, tokenIdcXT2YiJ, {from: accounts[1]});

		await expect(contractQuLnfwX.transferFrom.call(fromSDtf0J, toInnmi0, tokenIdmApWUxs, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractndHl1y = await ERC721.new({from: "0x0000000000000000000000000000000000000001"});
		const tokenIdo2e65JZ = BigInt("1421")
		const tokenIdnitz6bT = BigInt("910")
		const tomFWuf1Q = "0x0000000000000000000000000000000000000001"
		const fromhJf0Fwa = accounts[4]
		const operatorI02lYtM = "0x0000000000000000000000000000000000000001"
		const ownervilpi7x = accounts[4]
		const nullgzZm5Hb = await contractndHl1y.getApproved.call(tokenIdo2e65JZ, {from: accounts[3]});
		await contractndHl1y.transferFrom.call(fromhJf0Fwa, tomFWuf1Q, tokenIdnitz6bT, {from: accounts[1]});
		const nullmheMQRv = await contractndHl1y.isApprovedForAll.call(ownervilpi7x, operatorI02lYtM, {from: accounts[1]});
	});

	it('test for ERC721', async () => {
		const contractVEKQa2w = await ERC721.new({from: accounts[2]});
		const approvedms4ieaf = false
		const tovM3XvF = "0x0000000000000000000000000000000000000001"
		const tokenIdVIgNJ4 = BigInt("276")
		await contractVEKQa2w.setApprovalForAll.call(tovM3XvF, approvedms4ieaf, {from: "0x0000000000000000000000000000000000000001"});
		const nullqkNNSiM = await contractVEKQa2w.ownerOf.call(tokenIdVIgNJ4, {from: accounts[0]});

		await expect(contractVEKQa2w.setApprovalForAll.call(tovM3XvF, approvedms4ieaf, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})