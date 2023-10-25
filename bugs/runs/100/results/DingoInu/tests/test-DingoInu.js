const DingoInu = artifacts.require("DingoInu");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DingoInu', (accounts) => {
	it('test for DingoInu', async () => {
		const contractpY8d3ZI = await DingoInu.new({from: accounts[1]});
		const tokenOwnerezst71 = accounts[2]
		const tokensbgK3F8 = BigInt("1795")
		const spenderQmKJ0O0 = accounts[3]
		const tokenspDzPist = BigInt("866")
		const spenderTh76EMX = accounts[0]
		const tokensxwPDHRh = BigInt("1667")
		const spenderBRu8bD = accounts[4]
		const balanceUQnpSrO = await contractpY8d3ZI.balanceOf.call(tokenOwnerezst71, {from: accounts[3]});
		const successqRgewHM = await contractpY8d3ZI.approve.call(spenderQmKJ0O0, tokensbgK3F8, {from: "0x0000000000000000000000000000000000000001"});
		const successbouycWP = await contractpY8d3ZI.approve.call(spenderTh76EMX, tokenspDzPist, {from: accounts[2]});
		const successr0BYKCE = await contractpY8d3ZI.approve.call(spenderBRu8bD, tokensxwPDHRh, {from: accounts[3]});

		assert.equal(balanceUQnpSrO, 0)
		assert.equal(successbouycWP, true)
		assert.equal(successqRgewHM, true)
		assert.equal(successr0BYKCE, true)
	});

	it('test for DingoInu', async () => {
		const contractawk4x1Z = await DingoInu.new({from: accounts[3]});
		const tokensnFdW80L = BigInt("453")
		const tocg9y1MM = accounts[3]
		const spenderMAu5CH8 = accounts[2]
		const tokenOwnerFe5wIn7 = "0x0000000000000000000000000000000000000001"
		const tokensBLWAbBh = BigInt("200")
		const spenders0meBg4 = accounts[1]
		const tokensp5Uekp7 = BigInt("1225")
		const spenderoE729mO = accounts[0]
		const tokensJMvqqx = BigInt("1463")
		const toNEZKzHP = accounts[2]
		const successr3JpY27 = await contractawk4x1Z.transfer.call(tocg9y1MM, tokensnFdW80L, {from: accounts[0]});
		const remainingLgfn0sD = await contractawk4x1Z.allowance.call(tokenOwnerFe5wIn7, spenderMAu5CH8, {from: accounts[2]});
		const successIQ9i1d = await contractawk4x1Z.approve.call(spenders0meBg4, tokensBLWAbBh, {from: accounts[3]});
		const successDUQcovH = await contractawk4x1Z.approve.call(spenderoE729mO, tokensp5Uekp7, {from: accounts[1]});
		const successvhRA0Pm = await contractawk4x1Z.transfer.call(toNEZKzHP, tokensJMvqqx, {from: accounts[1]});

		await expect(contractawk4x1Z.transfer.call(tocg9y1MM, tokensnFdW80L, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DingoInu', async () => {
		const contractHEGPKNb = await DingoInu.new({from: accounts[4]});
		const tokenOwnerrABDSSz = accounts[3]
		const tokensw7tH1Mq = BigInt("1839")
		const toUvxvifK = accounts[1]
		const fromoXbdgH = accounts[4]
		const balanceRONbnhy = await contractHEGPKNb.balanceOf.call(tokenOwnerrABDSSz, {from: accounts[3]});
		const nullAbiw9k2 = await contractHEGPKNb.totalSupply.call({from: accounts[1]});
		const success5mfJ8H = await contractHEGPKNb.transferFrom.call(fromoXbdgH, toUvxvifK, tokensw7tH1Mq, {from: accounts[0]});

		assert.equal(balanceRONbnhy, 0)
		assert.equal(nullAbiw9k2, 1000000000000000000000000000000)
		await expect(contractHEGPKNb.transferFrom.call(fromoXbdgH, toUvxvifK, tokensw7tH1Mq, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DingoInu', async () => {
		const contractL0ovzP = await DingoInu.new({from: "0x0000000000000000000000000000000000000001"});
		const tokensGG30KvF = BigInt("1859")
		const toXNaCLmF = accounts[4]
		const fromwh1ZIWO = accounts[2]
		const tokenscljLijG = BigInt("1600")
		const spenderRaCmJCQ = accounts[5]
		const spenderPeqVTB1 = accounts[1]
		const tokenOwnerRJkrBWw = accounts[5]
		const successxCYs0Ym = await contractL0ovzP.transferFrom.call(fromwh1ZIWO, toXNaCLmF, tokensGG30KvF, {from: accounts[2]});
		const successV5urKYj = await contractL0ovzP.approve.call(spenderRaCmJCQ, tokenscljLijG, {from: accounts[5]});
		const remainingvfJ5ATY = await contractL0ovzP.allowance.call(tokenOwnerRJkrBWw, spenderPeqVTB1, {from: accounts[4]});
	});

	it('test for DingoInu', async () => {
		const contracte7wOCFS = await DingoInu.new({from: accounts[3]});
		const tokenswNxQ7D = BigInt("904")
		const tok8MuqiV = "0x0000000000000000000000000000000000000001"
		const tokensuQa6gF4 = BigInt("421")
		const toF0phJqk = accounts[3]
		const successRMfMjDq = await contracte7wOCFS.transfer.call(tok8MuqiV, tokenswNxQ7D, {from: accounts[3]});
		const successRnFfye = await contracte7wOCFS.transfer.call(toF0phJqk, tokensuQa6gF4, {from: accounts[3]});
		const nullnsRghJ4 = await contracte7wOCFS.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(nullnsRghJ4, 1000000000000000000000000000000)
		assert.equal(successRMfMjDq, true)
		assert.equal(successRnFfye, true)
	});

	it('test for DingoInu', async () => {
		const contractD0IsZpl = await DingoInu.new({from: accounts[3]});
		const spendergzc3Jy2 = accounts[3]
		const tokenOwnerIeTdtO = accounts[0]
		const spenderr36rrHB = "0x0000000000000000000000000000000000000001"
		const tokenOwnerL2OW3cQ = accounts[1]
		const spenderKua4ail = accounts[3]
		const tokenOwnerZlxjn5c = "0x0000000000000000000000000000000000000001"
		const remainingcQi1jC6 = await contractD0IsZpl.allowance.call(tokenOwnerIeTdtO, spendergzc3Jy2, {from: accounts[2]});
		const remainingEsC2pZu = await contractD0IsZpl.allowance.call(tokenOwnerL2OW3cQ, spenderr36rrHB, {from: accounts[3]});
		const remaining4HZQoF = await contractD0IsZpl.allowance.call(tokenOwnerZlxjn5c, spenderKua4ail, {from: accounts[4]});

		assert.equal(remaining4HZQoF, 0)
		assert.equal(remainingEsC2pZu, 0)
		assert.equal(remainingcQi1jC6, 0)
	});
})