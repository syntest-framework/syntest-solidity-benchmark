const FreakCoin = artifacts.require("FreakCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FreakCoin', (accounts) => {
	it('test for FreakCoin', async () => {
		const FreakCoinUQig18 = await FreakCoin.new({from: accounts[3]});
		const addressjZ8ZO1O = "0x0000000000000000000000000000000000000001"
		const uintxEALH07 = BigInt("1660")
		const addressGbIW0Wj = accounts[1]
		const uintJkkUmk = BigInt("1202")
		const addressKPT8FuK = accounts[3]
		const addressY7GzsOR = accounts[2]
//		const uint256XAs1y0 = await FreakCoinUQig18.allUserBalances.call(addressjZ8ZO1O, {from: accounts[4]});
//		const boolVAt24l0 = await FreakCoinUQig18.approve.call(addressGbIW0Wj, uintxEALH07, {from: accounts[2]});
//		const boolj6NUkT0 = await FreakCoinUQig18.transferFrom.call(addressY7GzsOR, addressKPT8FuK, uintJkkUmk, {from: accounts[2]});

		await expect(FreakCoinUQig18.allUserBalances.call(addressjZ8ZO1O, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoin5H6kNS = await FreakCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const uintmd0ViTm = BigInt("1964")
		const addressU06VNJe = accounts[2]
		const addressydLlVf = accounts[4]
		const uintoCaTqXk = BigInt("1461")
		const addressoMVPLB = accounts[1]
		const addressKCLRWl = accounts[4]
		const addressC9o32wy = await FreakCoin5H6kNS.uniswapAddress.call({from: accounts[3]});
		const boolD60XMX = await FreakCoin5H6kNS.transferFrom.call(addressydLlVf, addressU06VNJe, uintmd0ViTm, {from: accounts[0]});
		const booljGdKG1k = await FreakCoin5H6kNS.approve.call(addressoMVPLB, uintoCaTqXk, {from: accounts[2]});
		const addressPGmHldc = await FreakCoin5H6kNS.uniswapAddress.call({from: accounts[4]});
		const uint256TYUL04R = await FreakCoin5H6kNS.balanceOf.call(addressKCLRWl, {from: accounts[0]});
	});

	it('test for FreakCoin', async () => {
		const FreakCoinaceqo97 = await FreakCoin.new({from: accounts[2]});
		const addresssMyliOs = accounts[4]
		const addressd1z1nA = accounts[3]
		const addressEBMZ7ur = accounts[2]
		const uintY6jC1ro = BigInt("1514")
		const addressaRWd99V = accounts[0]
		const uinthB6C35N = BigInt("919")
		const addressIat0eNU = accounts[4]
		const uint256TEOAc7B = await FreakCoinaceqo97.allowance.call(addressd1z1nA, addresssMyliOs, {from: accounts[4]});
		const uint256hJsqJjA = await FreakCoinaceqo97.allUserBalances.call(addressEBMZ7ur, {from: accounts[5]});
//		const boolkPuZtNZ = await FreakCoinaceqo97.transfer.call(addressaRWd99V, uintY6jC1ro, {from: "0x0000000000000000000000000000000000000001"});
//		const boolHCR6jlY = await FreakCoinaceqo97.transfer.call(addressIat0eNU, uinthB6C35N, {from: accounts[5]});

		assert.equal(uint256TEOAc7B, BigInt("0"))
		await expect(FreakCoinaceqo97.transfer.call(addressaRWd99V, uintY6jC1ro, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinxydsx4Y = await FreakCoin.new({from: accounts[2]});
		const uintcEZizO9 = BigInt("1070")
		const addressP8iLGHG = accounts[0]
		const addressJlXCF9L = accounts[0]
		const addressDm7lRXq = accounts[3]
		const addressNzhFhk6 = await FreakCoinxydsx4Y.uniswapAddress.call({from: accounts[1]});
		const uint256XIrrGEJ = await FreakCoinxydsx4Y.totalSupply.call({from: accounts[1]});
		const boolve1E77d = await FreakCoinxydsx4Y.approve.call(addressP8iLGHG, uintcEZizO9, {from: "0x0000000000000000000000000000000000000001"});
		const uint256Nwi5iKB = await FreakCoinxydsx4Y.balanceOf.call(addressJlXCF9L, {from: accounts[1]});
		const uint256cAZK1kk = await FreakCoinxydsx4Y.balanceOf.call(addressDm7lRXq, {from: accounts[0]});

		assert.equal(addressNzhFhk6, 0x0000000000000000000000000000000000000000)
		assert.equal(boolve1E77d, true)
		assert.equal(uint256Nwi5iKB, BigInt("0"))
		assert.equal(uint256XIrrGEJ, BigInt("1000000"))
		assert.equal(uint256cAZK1kk, BigInt("0"))
	});

	it('test for FreakCoin', async () => {
		const FreakCoinT4AKmpx = await FreakCoin.new({from: accounts[3]});
		const addressP50JVSR = accounts[1]
		const addressK8DfePy = await FreakCoinT4AKmpx.uniswapAddress.call({from: accounts[2]});
		const addresstHCoY5h = await FreakCoinT4AKmpx.setUniswapAddress.call(addressP50JVSR, {from: accounts[3]});

		assert.equal(addressK8DfePy, 0x0000000000000000000000000000000000000000)
	});

	it('test for FreakCoin', async () => {
		const FreakCoinHGLp52T = await FreakCoin.new({from: accounts[1]});
		const uintPf2vGwL = BigInt("785")
		const addressJySyHcN = accounts[2]
		const addressDYWfzHr = accounts[4]
		const uintnF7ggJ = BigInt("1433")
		const addressniVVISh = accounts[0]
		const uintCIV6K6 = BigInt("106")
		const addressLKKWjNZ = accounts[4]
		const addressJu3jjwW = accounts[2]
//		const booltrsl3Vr = await FreakCoinHGLp52T.transferFrom.call(addressDYWfzHr, addressJySyHcN, uintPf2vGwL, {from: accounts[4]});
//		const booluvei7Eu = await FreakCoinHGLp52T.approve.call(addressniVVISh, uintnF7ggJ, {from: accounts[3]});
//		const boolfo9j51 = await FreakCoinHGLp52T.transferFrom.call(addressJu3jjwW, addressLKKWjNZ, uintCIV6K6, {from: accounts[4]});

		await expect(FreakCoinHGLp52T.transferFrom.call(addressDYWfzHr, addressJySyHcN, uintPf2vGwL, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinT4AKmpx = await FreakCoin.new({from: accounts[3]});
		const uintR6cPC9i = BigInt("1787")
		const addressj60hTON = accounts[3]
		const address07bmUl = accounts[0]
		const boolDuFQwFU = await FreakCoinT4AKmpx.transfer.call(addressj60hTON, uintR6cPC9i, {from: accounts[3]});
		const addressiMObFLX = await FreakCoinT4AKmpx.uniswapAddress.call({from: accounts[5]});
//		const uint256p5oo48 = await FreakCoinT4AKmpx.allUserBalances.call(address07bmUl, {from: accounts[0]});
//		const addressK8DfePy = await FreakCoinT4AKmpx.uniswapAddress.call({from: accounts[2]});

		assert.equal(addressiMObFLX, 0x0000000000000000000000000000000000000000)
		assert.equal(boolDuFQwFU, true)
		await expect(FreakCoinT4AKmpx.allUserBalances.call(address07bmUl, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinxYgEFyr = await FreakCoin.new({from: accounts[1]});
		const uintBPWBzdG = BigInt("392")
		const addressLvKN1R1 = accounts[3]
		const addressXX4oMo = await FreakCoinxYgEFyr.uniswapAddress.call({from: accounts[5]});
		const booldviI0U = await FreakCoinxYgEFyr.transfer.call(addressLvKN1R1, uintBPWBzdG, {from: accounts[1]});

		assert.equal(addressXX4oMo, 0x0000000000000000000000000000000000000000)
		assert.equal(booldviI0U, true)
	});
})