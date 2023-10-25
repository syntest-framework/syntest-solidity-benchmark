const ERC721 = artifacts.require("ERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721', (accounts) => {
	it('test for ERC721', async () => {
		const contractNdzbmI4 = await ERC721.new({from: accounts[1]});
		const ownercW2pTI = accounts[5]
		const tokenIdrVmm2Ot = BigInt("370")
		const approvedvQEGv6i = true
		const toIv94f33 = "0x0000000000000000000000000000000000000001"
		const tokenIdQ97hk3Z = BigInt("1942")
		const toOmafJ5W = accounts[4]
		const tokenIdBghKwOT = BigInt("516")
		const tokenIddh7dGu0 = BigInt("251")
		const toJpqwD5 = accounts[5]
		const fromn8x5tmv = accounts[2]
		const nullfmzHwFu = await contractNdzbmI4.balanceOf.call(ownercW2pTI, {from: accounts[0]});
		const nullW6UpFtK = await contractNdzbmI4.getApproved.call(tokenIdrVmm2Ot, {from: accounts[2]});
		await contractNdzbmI4.setApprovalForAll.call(toIv94f33, approvedvQEGv6i, {from: accounts[3]});
		await contractNdzbmI4.approve.call(toOmafJ5W, tokenIdQ97hk3Z, {from: accounts[1]});
		const nullajafQRV = await contractNdzbmI4.getApproved.call(tokenIdBghKwOT, {from: accounts[5]});
		await contractNdzbmI4.transferFrom.call(fromn8x5tmv, toJpqwD5, tokenIddh7dGu0, {from: accounts[4]});

		assert.equal(nullfmzHwFu, 0)
		await expect(contractNdzbmI4.getApproved.call(tokenIdrVmm2Ot, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractDed9U4u = await ERC721.new({from: accounts[4]});
		const tokenIdVN8bOlV = BigInt("1867")
		const toDKEyDgB = accounts[5]
		const fromLsUlCST = accounts[2]
		const tokenIdYiz5x41 = BigInt("1000")
		const tokdjcKKu = accounts[5]
		const fromjKPwYSe = accounts[1]
		const operatorodJ3bSu = accounts[3]
		const ownertEYBykP = accounts[4]
		const tokenIduK93bpd = BigInt("1006")
		const tokenIdjSnVU5 = BigInt("125")
		const toPbtyGc9 = accounts[3]
		const fromzAsIk5y = accounts[4]
		const tokenIdzgbuYFF = BigInt("293")
		await contractDed9U4u.transferFrom.call(fromLsUlCST, toDKEyDgB, tokenIdVN8bOlV, {from: accounts[0]});
		await contractDed9U4u.transferFrom.call(fromjKPwYSe, tokdjcKKu, tokenIdYiz5x41, {from: accounts[0]});
		const nullEhrZvO = await contractDed9U4u.isApprovedForAll.call(ownertEYBykP, operatorodJ3bSu, {from: accounts[5]});
		const nullNwIOw6 = await contractDed9U4u.ownerOf.call(tokenIduK93bpd, {from: accounts[3]});
		await contractDed9U4u.safeTransferFrom.call(fromzAsIk5y, toPbtyGc9, tokenIdjSnVU5, {from: accounts[0]});
		const nullpAj33mH = await contractDed9U4u.ownerOf.call(tokenIdzgbuYFF, {from: accounts[3]});

		await expect(contractDed9U4u.transferFrom.call(fromLsUlCST, toDKEyDgB, tokenIdVN8bOlV, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractbDlF2qa = await ERC721.new({from: accounts[1]});
		const ownerEfVgbUa = accounts[4]
		const tokenIdpwUBdR = BigInt("98")
		const toEklamPC = accounts[0]
		const tokenIdKHBDUc = BigInt("511")
		const toYxZAxdy = accounts[4]
		const fromp3RyXMN = accounts[1]
		const tokenIdD89bIn4 = BigInt("640")
		const toMiOEnDR = accounts[2]
		const fromIAUDhDC = accounts[0]
		const nullGydBVj = await contractbDlF2qa.balanceOf.call(ownerEfVgbUa, {from: accounts[4]});
		await contractbDlF2qa.approve.call(toEklamPC, tokenIdpwUBdR, {from: accounts[1]});
		await contractbDlF2qa.safeTransferFrom.call(fromp3RyXMN, toYxZAxdy, tokenIdKHBDUc, {from: accounts[0]});
		await contractbDlF2qa.transferFrom.call(fromIAUDhDC, toMiOEnDR, tokenIdD89bIn4, {from: accounts[3]});

		assert.equal(nullGydBVj, 0)
		await expect(contractbDlF2qa.approve.call(toEklamPC, tokenIdpwUBdR, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contract6Hh8z9 = await ERC721.new({from: accounts[1]});
		const operatordHiHlP = accounts[4]
		const ownerKyaXSUw = accounts[3]
		const approvedDopx6qA = false
		const toqVpWauD = accounts[1]
		const tokenIduEze0N7 = BigInt("1158")
		const towdUpGZb = accounts[0]
		const tokenIdouG4sq = BigInt("87")
		const approvedfq6pMxV = true
		const toaGDUyeR = accounts[4]
		const tokenIdovi5t75 = BigInt("533")
		const toihJAAE = accounts[3]
		const fromfoF0VLj = "0x0000000000000000000000000000000000000001"
		const nulluahSBHv = await contract6Hh8z9.isApprovedForAll.call(ownerKyaXSUw, operatordHiHlP, {from: accounts[1]});
		await contract6Hh8z9.setApprovalForAll.call(toqVpWauD, approvedDopx6qA, {from: accounts[4]});
		await contract6Hh8z9.approve.call(towdUpGZb, tokenIduEze0N7, {from: accounts[0]});
		const nullqJE1Xth = await contract6Hh8z9.getApproved.call(tokenIdouG4sq, {from: accounts[3]});
		await contract6Hh8z9.setApprovalForAll.call(toaGDUyeR, approvedfq6pMxV, {from: accounts[4]});
		await contract6Hh8z9.transferFrom.call(fromfoF0VLj, toihJAAE, tokenIdovi5t75, {from: accounts[5]});

		assert.equal(nulluahSBHv, false)
		await expect(contract6Hh8z9.setApprovalForAll.call(toqVpWauD, approvedDopx6qA, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractaNtKRv = await ERC721.new({from: accounts[3]});
		const tokenIdabiH0Bw = BigInt("641")
		const toDUVU8sf = "0x0000000000000000000000000000000000000001"
		const fromTPC5zPF = accounts[4]
		const tokenIdmNkv1w = BigInt("1650")
		const tokenIdkDeoMcg = BigInt("1710")
		await contractaNtKRv.safeTransferFrom.call(fromTPC5zPF, toDUVU8sf, tokenIdabiH0Bw, {from: accounts[0]});
		const nullhIiWB8u = await contractaNtKRv.getApproved.call(tokenIdmNkv1w, {from: accounts[5]});
		const nullE2J2d57 = await contractaNtKRv.ownerOf.call(tokenIdkDeoMcg, {from: accounts[1]});

		await expect(contractaNtKRv.safeTransferFrom.call(fromTPC5zPF, toDUVU8sf, tokenIdabiH0Bw, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractZuomer2 = await ERC721.new({from: "0x0000000000000000000000000000000000000001"});
		const tokenIdCmSfDEc = BigInt("1528")
		const toAgjKf07 = accounts[3]
		const fromuX1jo6P = accounts[2]
		const _dataGuwI3ne = "0x180c0f131014"
		const tokenIdR6LfoDd = BigInt("1431")
		const toAD7bTMM = accounts[3]
		const fromBPeJo7I = accounts[2]
		const approvedZGO4NFi = true
		const toCCVvEtr = accounts[2]
		const ownerHBXKc9S = accounts[3]
		const tokenIdzTcROZl = BigInt("1648")
		const torZ0ibV = accounts[3]
		await contractZuomer2.transferFrom.call(fromuX1jo6P, toAgjKf07, tokenIdCmSfDEc, {from: accounts[3]});
		await contractZuomer2.safeTransferFrom.call(fromBPeJo7I, toAD7bTMM, tokenIdR6LfoDd, _dataGuwI3ne, {from: accounts[4]});
		await contractZuomer2.setApprovalForAll.call(toCCVvEtr, approvedZGO4NFi, {from: accounts[4]});
		const nullMa0K8Xx = await contractZuomer2.balanceOf.call(ownerHBXKc9S, {from: "0x0000000000000000000000000000000000000001"});
		await contractZuomer2.approve.call(torZ0ibV, tokenIdzTcROZl, {from: accounts[3]});
	});

	it('test for ERC721', async () => {
		const contractNsRJxih = await ERC721.new({from: accounts[3]});
		const approvedRarO7Oj = false
		const toDd8S7l1 = accounts[3]
		const tokenIdSTFYm1S = BigInt("1826")
		const toHVqeUka = accounts[5]
		await contractNsRJxih.setApprovalForAll.call(toDd8S7l1, approvedRarO7Oj, {from: accounts[3]});
		await contractNsRJxih.approve.call(toHVqeUka, tokenIdSTFYm1S, {from: accounts[0]});

		await expect(contractNsRJxih.setApprovalForAll.call(toDd8S7l1, approvedRarO7Oj, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})