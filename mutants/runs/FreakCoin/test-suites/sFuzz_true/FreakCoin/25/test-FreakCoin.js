const FreakCoin = artifacts.require("FreakCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FreakCoin', (accounts) => {
	it('test for FreakCoin', async () => {
		const FreakCoinnjjhebj = await FreakCoin.new({from: accounts[5]});
		const addressn2GU1UD = accounts[3]
		const addressSLzOyXh = accounts[2]
		const addressi8Jyl2H = accounts[1]
		const uintAvT5pH6 = BigInt("408")
		const addressT347Yy = accounts[4]
		const addressHqt99dY = accounts[3]
		const uint256OMk2lzy = await FreakCoinnjjhebj.allUserBalances.call(addressn2GU1UD, {from: accounts[3]});
		const addressridfkXM = await FreakCoinnjjhebj.uniswapAddress.call({from: accounts[4]});
		const uint256vkxhP1q = await FreakCoinnjjhebj.balanceOf.call(addressSLzOyXh, {from: accounts[3]});
		const uint256SJvYS4a = await FreakCoinnjjhebj.balanceOf.call(addressi8Jyl2H, {from: accounts[3]});
		const boollEmfGMb = await FreakCoinnjjhebj.transferFrom.call(addressHqt99dY, addressT347Yy, uintAvT5pH6, {from: accounts[0]});

		await expect(FreakCoinnjjhebj.allUserBalances.call(addressn2GU1UD, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinMST3M2 = await FreakCoin.new({from: accounts[4]});
		const address8sxlJN = accounts[5]
		const addressb9HeMFV = accounts[0]
		const addresshU9dh81 = accounts[5]
		const uint256qBTAqSY = await FreakCoinMST3M2.balanceOf.call(address8sxlJN, {from: accounts[0]});
		const addressiH6Urc9 = await FreakCoinMST3M2.setUniswapAddress.call(addressb9HeMFV, {from: accounts[4]});
		const addressTqctndW = await FreakCoinMST3M2.setUniswapAddress.call(addresshU9dh81, {from: accounts[2]});

		assert.equal(uint256qBTAqSY, BigInt("0"))
		await expect(FreakCoinMST3M2.setUniswapAddress.call(addresshU9dh81, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinPANRKKh = await FreakCoin.new({from: accounts[3]});
		const uintfwLpQhR = BigInt("1386")
		const addressYmnRqyg = accounts[0]
		const addressKqBShjl = accounts[2]
		const bool9CxpZ9 = await FreakCoinPANRKKh.transfer.call(addressYmnRqyg, uintfwLpQhR, {from: accounts[3]});
		const addressaGKSSTX = await FreakCoinPANRKKh.setUniswapAddress.call(addressKqBShjl, {from: accounts[2]});
		const addressfR4ZMdJ = await FreakCoinPANRKKh.uniswapAddress.call({from: accounts[2]});

		assert.equal(bool9CxpZ9, true)
		await expect(FreakCoinPANRKKh.setUniswapAddress.call(addressKqBShjl, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinzfRa7a3 = await FreakCoin.new({from: accounts[4]});
		const uinttUWjysR = BigInt("1534")
		const addressKbdNUCu = accounts[5]
		const addressTLoHWoQ = accounts[5]
		const addressO4dWU7 = accounts[4]
		const addressnvi8g2K = await FreakCoinzfRa7a3.uniswapAddress.call({from: accounts[3]});
		const boolxBbfM4 = await FreakCoinzfRa7a3.transferFrom.call(addressTLoHWoQ, addressKbdNUCu, uinttUWjysR, {from: accounts[4]});
		const uint256ODfYGif = await FreakCoinzfRa7a3.balanceOf.call(addressO4dWU7, {from: accounts[3]});
		const uint256U0bNwIs = await FreakCoinzfRa7a3.totalSupply.call({from: accounts[4]});

		assert.equal(addressnvi8g2K, 0x0000000000000000000000000000000000000000)
		await expect(FreakCoinzfRa7a3.transferFrom.call(addressTLoHWoQ, addressKbdNUCu, uinttUWjysR, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinnZI9unO = await FreakCoin.new({from: accounts[0]});
		const uintKYKsur = BigInt("465")
		const addressojQzr8 = accounts[3]
		const addressxx9Lq4D = accounts[1]
		const addressGtQ6fdu = accounts[4]
		const addressXuYTwft = accounts[1]
		const addressAbAvmb = accounts[1]
		const addressWvF845K = accounts[2]
		const boolxCob6kz = await FreakCoinnZI9unO.transfer.call(addressojQzr8, uintKYKsur, {from: accounts[0]});
		const uint256o8dCRb = await FreakCoinnZI9unO.allowance.call(addressGtQ6fdu, addressxx9Lq4D, {from: accounts[5]});
		const uint256EpU8Nlg = await FreakCoinnZI9unO.allowance.call(addressAbAvmb, addressXuYTwft, {from: accounts[3]});
		const uint256BzQjfgI = await FreakCoinnZI9unO.balanceOf.call(addressWvF845K, {from: accounts[5]});
		const addresspLgpoZm = await FreakCoinnZI9unO.uniswapAddress.call({from: accounts[0]});

		assert.equal(addresspLgpoZm, 0x0000000000000000000000000000000000000000)
		assert.equal(boolxCob6kz, true)
		assert.equal(uint256BzQjfgI, BigInt("0"))
		assert.equal(uint256EpU8Nlg, BigInt("0"))
		assert.equal(uint256o8dCRb, BigInt("0"))
	});

	it('test for FreakCoin', async () => {
		const FreakCoinQjME80 = await FreakCoin.new({from: accounts[4]});
		const uintkzZ7pgS = BigInt("261")
		const addressj3LDsz1 = accounts[2]
		const uintSdCvuWf = BigInt("77")
		const addresskuLkuFz = accounts[4]
		const addressF0Ix81a = accounts[0]
		const uintVyR9KOc = BigInt("1477")
		const addressfmc1wW0 = accounts[2]
		const uinti53rBF8 = BigInt("1334")
		const addressdTONNZg = accounts[2]
		const addressFVoBGxn = accounts[3]
		const uintPF0chF9 = BigInt("1597")
		const addressI6GNgmy = accounts[0]
		const boolbMkVLrY = await FreakCoinQjME80.approve.call(addressj3LDsz1, uintkzZ7pgS, {from: accounts[1]});
		const boolBHRtxPK = await FreakCoinQjME80.transferFrom.call(addressF0Ix81a, addresskuLkuFz, uintSdCvuWf, {from: accounts[1]});
		const boolAW1XLcp = await FreakCoinQjME80.transfer.call(addressfmc1wW0, uintVyR9KOc, {from: accounts[2]});
		const boolGJT8GKX = await FreakCoinQjME80.transferFrom.call(addressFVoBGxn, addressdTONNZg, uinti53rBF8, {from: accounts[2]});
		const addresslU7zegY = await FreakCoinQjME80.uniswapAddress.call({from: accounts[2]});
		const boolOfhvrCl = await FreakCoinQjME80.approve.call(addressI6GNgmy, uintPF0chF9, {from: accounts[4]});

		assert.equal(boolbMkVLrY, true)
		await expect(FreakCoinQjME80.transferFrom.call(addressF0Ix81a, addresskuLkuFz, uintSdCvuWf, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinZQTN2ck = await FreakCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const uintmlLSFyv = BigInt("855")
		const addressYgNTzf = accounts[0]
		const addresszuQIvg = accounts[0]
		const uintiSh8dEN = BigInt("1586")
		const addresszHGwXsa = accounts[4]
		const addressEm0T0ot = accounts[3]
		const uinthVz0hlN = BigInt("1541")
		const addressmWfOTCB = accounts[4]
		const addresssVuH9ds = accounts[3]
		const addressaHNZHLm = accounts[4]
		const addressRqXqRDH = accounts[4]
		const boolJ1HFPdZ = await FreakCoinZQTN2ck.transferFrom.call(addresszuQIvg, addressYgNTzf, uintmlLSFyv, {from: accounts[3]});
		const boolgWklNNw = await FreakCoinZQTN2ck.transferFrom.call(addressEm0T0ot, addresszHGwXsa, uintiSh8dEN, {from: accounts[4]});
		const boolIElOCvw = await FreakCoinZQTN2ck.transferFrom.call(addresssVuH9ds, addressmWfOTCB, uinthVz0hlN, {from: accounts[0]});
		const addressmZbGJhg = await FreakCoinZQTN2ck.setUniswapAddress.call(addressaHNZHLm, {from: accounts[3]});
		const addressieJsY4B = await FreakCoinZQTN2ck.setUniswapAddress.call(addressRqXqRDH, {from: accounts[4]});
	});

	it('test for FreakCoin', async () => {
		const FreakCoinQFIllmi = await FreakCoin.new({from: accounts[2]});
		const addressbjweITg = accounts[2]
		const uintKD5hJqY = BigInt("1720")
		const addressVMGkc8r = accounts[2]
		const addressM8nSfum = accounts[2]
		const addressfoVjEyu = accounts[0]
		const addressFPIK4J = await FreakCoinQFIllmi.setUniswapAddress.call(addressbjweITg, {from: accounts[2]});
		const boolQJRSoOs = await FreakCoinQFIllmi.transfer.call(addressVMGkc8r, uintKD5hJqY, {from: accounts[2]});
		const uint256azfDcsp = await FreakCoinQFIllmi.allowance.call(addressfoVjEyu, addressM8nSfum, {from: accounts[0]});

		assert.equal(boolQJRSoOs, true)
		assert.equal(uint256azfDcsp, BigInt("0"))
	});
})