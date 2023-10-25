const Reseller = artifacts.require("Reseller");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Reseller', (accounts) => {
	it('test for Reseller', async () => {
		const USDTAddrKGBaU9 = accounts[2]
		const FOSTERAddrieJP6p9 = accounts[3]
		const initialRatevUlLAfz = BigInt("1558")
		const initialPeriodjgxFmf8 = BigInt("1416")
		const initialOwnervxoB6rP = accounts[1]
		const contractbLhNJ8L = await Reseller.new(USDTAddrKGBaU9, FOSTERAddrieJP6p9, initialRatevUlLAfz, initialPeriodjgxFmf8, initialOwnervxoB6rP, {from: "0x0000000000000000000000000000000000000001"});
		const newFeeeiPsbZ = BigInt("198")
		const newPeriodwXWC0Q = BigInt("978")
		await contractbLhNJ8L.setFee.call(newFeeeiPsbZ, {from: accounts[5]});
		await contractbLhNJ8L.setPeriod.call(newPeriodwXWC0Q, {from: accounts[0]});
	});

	it('test for Reseller', async () => {
		const USDTAddrfFgOAYF = accounts[0]
		const FOSTERAddrzBMqAYg = accounts[0]
		const initialRatenO99PQU = BigInt("585")
		const initialPeriodFPCe5z6 = BigInt("812")
		const initialOwnerWzUPUkw = accounts[3]
		const contractgjOb9JO = await Reseller.new(USDTAddrfFgOAYF, FOSTERAddrzBMqAYg, initialRatenO99PQU, initialPeriodFPCe5z6, initialOwnerWzUPUkw, {from: accounts[2]});
		const _periodJdTZZla = BigInt("1739")
		const amountsAXRAi = BigInt("924")
		const recipientAxSmG3G = accounts[2]
		const newBoss3YPolx32 = accounts[3]
		const valueaXmNAo6 = BigInt("924")
		const recipientSHbPRiI = accounts[0]
		const ERC20TokenyI8U6dL = accounts[0]
		const newBoss1isWo9BE = accounts[4]
		await contractgjOb9JO.freezeAndTransfer.call(recipientAxSmG3G, amountsAXRAi, _periodJdTZZla, {from: accounts[0]});
		await contractgjOb9JO.deposeBoss3.call(newBoss3YPolx32, {from: "0x0000000000000000000000000000000000000001"});
		await contractgjOb9JO.withdrawERC20.call(ERC20TokenyI8U6dL, recipientSHbPRiI, valueaXmNAo6, {from: accounts[3]});
		await contractgjOb9JO.deposeBoss1.call(newBoss1isWo9BE, {from: accounts[2]});
		await contractgjOb9JO.switchState.call({from: accounts[2]});

		await expect(contractgjOb9JO.freezeAndTransfer.call(recipientAxSmG3G, amountsAXRAi, _periodJdTZZla, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrtXpaiYQ = accounts[4]
		const FOSTERAddrr9SysAw = accounts[5]
		const initialRateJrHU21t = BigInt("1107")
		const initialPeriodatVaO4 = BigInt("744")
		const initialOwnerRq3eQD = accounts[1]
		const contractfbyzk73 = await Reseller.new(USDTAddrtXpaiYQ, FOSTERAddrr9SysAw, initialRateJrHU21t, initialPeriodatVaO4, initialOwnerRq3eQD, {from: accounts[3]});
		const commentLZ7V2pN = "fjMx2t"
		const _ref5jOpe2BE = accounts[3]
		const _ref4jCQyD8W = "0x0000000000000000000000000000000000000001"
		const _ref3VtjnUHq = accounts[2]
		const _ref2HhKe9oX = accounts[5]
		const _ref1PppRR6W = accounts[4]
		const valuewNc9zKB = BigInt("153")
		const newPeriodGx7Py6M = BigInt("795")
		const valuerM4cKFX = BigInt("2033")
		await contractfbyzk73.switchState.call({from: accounts[3]});
		await contractfbyzk73.switchState.call({from: accounts[2]});
		await contractfbyzk73.purchase.call(valuewNc9zKB, _ref1PppRR6W, _ref2HhKe9oX, _ref3VtjnUHq, _ref4jCQyD8W, _ref5jOpe2BE, commentLZ7V2pN, {from: accounts[0]});
		await contractfbyzk73.setPeriod.call(newPeriodGx7Py6M, {from: accounts[3]});
		await contractfbyzk73.withdraw.call(valuerM4cKFX, {from: accounts[4]});

		await expect(contractfbyzk73.switchState.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrsEiTX0 = accounts[4]
		const FOSTERAddrLjV1hDi = accounts[0]
		const initialRateEBTKUUe = BigInt("1580")
		const initialPeriodFDKyGuX = BigInt("340")
		const initialOwnerYFal7E2 = accounts[4]
		const contractHPiskrQ = await Reseller.new(USDTAddrsEiTX0, FOSTERAddrLjV1hDi, initialRateEBTKUUe, initialPeriodFDKyGuX, initialOwnerYFal7E2, {from: accounts[5]});
		const _ref5XtwQAvh = accounts[5]
		const _ref4r5imoat = accounts[4]
		const _ref3dm6Qfb6 = accounts[0]
		const _ref2LAZ7eis = accounts[1]
		const _ref1FzZhJOz = accounts[2]
		const valueHGbMDdp = BigInt("905")
		const newBoss2tPmRO70 = accounts[4]
		const newBoss1hZzRM0r = accounts[0]
		const newRateGkVbwU0 = BigInt("377")
		await contractHPiskrQ.buy.call(valueHGbMDdp, _ref1FzZhJOz, _ref2LAZ7eis, _ref3dm6Qfb6, _ref4r5imoat, _ref5XtwQAvh, {from: accounts[4]});
		await contractHPiskrQ.deposeBoss2.call(newBoss2tPmRO70, {from: accounts[3]});
		await contractHPiskrQ.deposeBoss1.call(newBoss1hZzRM0r, {from: accounts[0]});
		await contractHPiskrQ.setRate.call(newRateGkVbwU0, {from: accounts[2]});

		await expect(contractHPiskrQ.buy.call(valueHGbMDdp, _ref1FzZhJOz, _ref2LAZ7eis, _ref3dm6Qfb6, _ref4r5imoat, _ref5XtwQAvh, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrIu2AtAh = accounts[4]
		const FOSTERAddrYJC276O = accounts[4]
		const initialRateWgZoldk = BigInt("869")
		const initialPeriodHNBw21z = BigInt("308")
		const initialOwner0hPpQQ = accounts[3]
		const contractTdwvOy = await Reseller.new(USDTAddrIu2AtAh, FOSTERAddrYJC276O, initialRateWgZoldk, initialPeriodHNBw21z, initialOwner0hPpQQ, {from: accounts[1]});
		const accountPdD9Acg = accounts[0]
		const accountWuNpD8P = accounts[0]
		const newFeexY7IZyQ = BigInt("213")
		const accountqtRZ7R8 = accounts[5]
		const _periodbxOd89a = BigInt("1156")
		const amountlna90Ea = BigInt("1549")
		const recipientmtdZaMg = accounts[4]
		const nullN07kxVU = await contractTdwvOy.allowanceUSDT.call(accountPdD9Acg, {from: accounts[1]});
		const nullmxsc7mf = await contractTdwvOy.balanceFOSTER.call(accountWuNpD8P, {from: accounts[3]});
		await contractTdwvOy.setFee.call(newFeexY7IZyQ, {from: "0x0000000000000000000000000000000000000001"});
		const nulloZaJEcu = await contractTdwvOy.allowanceUSDT.call(accountqtRZ7R8, {from: accounts[1]});
		await contractTdwvOy.freezeAndTransfer.call(recipientmtdZaMg, amountlna90Ea, _periodbxOd89a, {from: accounts[4]});

		await expect(contractTdwvOy.allowanceUSDT.call(accountPdD9Acg, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrIVYpf11 = accounts[1]
		const FOSTERAddrunIntYu = accounts[1]
		const initialRatetntKa7H = BigInt("467")
		const initialPeriodWGvjh38 = BigInt("1316")
		const initialOwnerqz50T3n = accounts[4]
		const contractzQEwSek = await Reseller.new(USDTAddrIVYpf11, FOSTERAddrunIntYu, initialRatetntKa7H, initialPeriodWGvjh38, initialOwnerqz50T3n, {from: accounts[5]});
		const newRateO59IiYD = BigInt("1178")
		await contractzQEwSek.setRate.call(newRateO59IiYD, {from: accounts[4]});
		await contractzQEwSek.switchState.call({from: accounts[3]});

		await expect(contractzQEwSek.setRate.call(newRateO59IiYD, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrMQQNsh = accounts[2]
		const FOSTERAddrLTIlQJv = accounts[5]
		const initialRatejtlbK0M = BigInt("800")
		const initialPeriodBvUetOd = BigInt("662")
		const initialOwneruWYqjd = accounts[5]
		const contractotI2Iav = await Reseller.new(USDTAddrMQQNsh, FOSTERAddrLTIlQJv, initialRatejtlbK0M, initialPeriodBvUetOd, initialOwneruWYqjd, {from: accounts[0]});
		const newBoss2yQGhXQ1 = accounts[1]
		const _periodiIwB7NC = BigInt("203")
		const amountt97xUFg = BigInt("931")
		const recipientqUiDpb6 = "0x0000000000000000000000000000000000000001"
		const _periodlxufpDY = BigInt("1382")
		const amountE6vclkc = BigInt("1169")
		const recipientcSijPyq = accounts[0]
		const newFeee4H5WMP = BigInt("213")
		await contractotI2Iav.deposeBoss2.call(newBoss2yQGhXQ1, {from: accounts[2]});
		await contractotI2Iav.freezeAndTransfer.call(recipientqUiDpb6, amountt97xUFg, _periodiIwB7NC, {from: accounts[0]});
		await contractotI2Iav.switchState.call({from: accounts[1]});
		await contractotI2Iav.freezeAndTransfer.call(recipientcSijPyq, amountE6vclkc, _periodlxufpDY, {from: accounts[3]});
		await contractotI2Iav.setFee.call(newFeee4H5WMP, {from: accounts[5]});

		await expect(contractotI2Iav.deposeBoss2.call(newBoss2yQGhXQ1, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrDWJZM3l = accounts[4]
		const FOSTERAddrPsB2WeP = accounts[0]
		const initialRateIYgijaf = BigInt("1580")
		const initialPeriodP0Hfq2 = BigInt("340")
		const initialOwnerx61A8eC = accounts[4]
		const contractUQh8tbn = await Reseller.new(USDTAddrDWJZM3l, FOSTERAddrPsB2WeP, initialRateIYgijaf, initialPeriodP0Hfq2, initialOwnerx61A8eC, {from: accounts[5]});
		const newBoss1ggCz6nh = accounts[2]
		const valueVRx2S4i = BigInt("1571")
		const recipientnno8p2o = accounts[3]
		const ERC20TokenDZyEosj = accounts[3]
		const _ref5Z6TsdWE = accounts[5]
		const _ref4iCFxgiE = accounts[4]
		const _ref39i6t62 = accounts[0]
		const _ref2r3bIJd4 = accounts[1]
		const _ref1wADuL15 = accounts[2]
		const valuei3uvZTt = BigInt("905")
		const newBoss2jGUQW8E = accounts[5]
		const newBoss4QW7YKLZ = accounts[2]
		const newBoss1Z9C8GZv = accounts[0]
		const newRateaLIi8cY = BigInt("377")
		await contractUQh8tbn.deposeBoss1.call(newBoss1ggCz6nh, {from: accounts[3]});
		await contractUQh8tbn.withdrawERC20.call(ERC20TokenDZyEosj, recipientnno8p2o, valueVRx2S4i, {from: accounts[2]});
		await contractUQh8tbn.buy.call(valuei3uvZTt, _ref1wADuL15, _ref2r3bIJd4, _ref39i6t62, _ref4iCFxgiE, _ref5Z6TsdWE, {from: accounts[4]});
		await contractUQh8tbn.deposeBoss2.call(newBoss2jGUQW8E, {from: accounts[3]});
		await contractUQh8tbn.deposeBoss4.call(newBoss4QW7YKLZ, {from: accounts[3]});
		await contractUQh8tbn.deposeBoss1.call(newBoss1Z9C8GZv, {from: accounts[0]});
		await contractUQh8tbn.setRate.call(newRateaLIi8cY, {from: accounts[2]});

		await expect(contractUQh8tbn.deposeBoss1.call(newBoss1ggCz6nh, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrygf3XXs = accounts[0]
		const FOSTERAddrAebu420 = accounts[0]
		const initialRateyOpxMwg = BigInt("585")
		const initialPeriodJruPeGi = BigInt("812")
		const initialOwnerobFH94l = accounts[3]
		const contractekULjmJ = await Reseller.new(USDTAddrygf3XXs, FOSTERAddrAebu420, initialRateyOpxMwg, initialPeriodJruPeGi, initialOwnerobFH94l, {from: accounts[2]});
		const newBoss3BFwT9yJ = accounts[3]
		const valueVRtIZbx = BigInt("924")
		const recipientDd9DhFw = accounts[1]
		const ERC20TokennX1GqhU = accounts[0]
		const _periodLRBxyMf = BigInt("443")
		const amountKDOjgG = BigInt("1976")
		const recipientRVO4F7e = accounts[2]
		const newBoss1VS3SVpQ = accounts[4]
		await contractekULjmJ.deposeBoss3.call(newBoss3BFwT9yJ, {from: "0x0000000000000000000000000000000000000001"});
		await contractekULjmJ.withdrawERC20.call(ERC20TokennX1GqhU, recipientDd9DhFw, valueVRtIZbx, {from: accounts[3]});
		await contractekULjmJ.freezeAndTransfer.call(recipientRVO4F7e, amountKDOjgG, _periodLRBxyMf, {from: "0x0000000000000000000000000000000000000001"});
		await contractekULjmJ.deposeBoss1.call(newBoss1VS3SVpQ, {from: accounts[2]});
		await contractekULjmJ.switchState.call({from: accounts[2]});

		await expect(contractekULjmJ.deposeBoss3.call(newBoss3BFwT9yJ, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddr3MPXye = accounts[2]
		const FOSTERAddrHD3kDNy = accounts[4]
		const initialRatehf04CdJ = BigInt("152")
		const initialPeriodiboQdap = BigInt("734")
		const initialOwnergsqsx5a = accounts[1]
		const contractuolH2Vd = await Reseller.new(USDTAddr3MPXye, FOSTERAddrHD3kDNy, initialRatehf04CdJ, initialPeriodiboQdap, initialOwnergsqsx5a, {from: accounts[2]});
		const newBoss4uDeV1Ig = accounts[3]
		const newPeriodEjprVF2 = BigInt("543")
		await contractuolH2Vd.deposeBoss4.call(newBoss4uDeV1Ig, {from: accounts[0]});
		await contractuolH2Vd.setPeriod.call(newPeriodEjprVF2, {from: accounts[3]});

		await expect(contractuolH2Vd.deposeBoss4.call(newBoss4uDeV1Ig, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrEP04pb = accounts[4]
		const FOSTERAddrQpbeR6j = accounts[0]
		const initialRateNzQMtO = BigInt("1580")
		const initialPeriodhbejFVy = BigInt("340")
		const initialOwnerUHhwH5Y = accounts[4]
		const contractIaJsX5X = await Reseller.new(USDTAddrEP04pb, FOSTERAddrQpbeR6j, initialRateNzQMtO, initialPeriodhbejFVy, initialOwnerUHhwH5Y, {from: accounts[5]});
		const amountKN5OuJ0 = BigInt("1761")
		const newBoss2Jkq3iLq = accounts[4]
		const valueJX7aV06 = BigInt("1737")
		const recipientWgQpVPq = accounts[0]
		const ERC20TokenRcPRrmg = accounts[4]
		const newRateGNNKk6V = BigInt("377")
		const newBoss2EgYGiCm = accounts[3]
		const nullb1qWSi = await contractIaJsX5X.getEstimation.call(amountKN5OuJ0, {from: accounts[0]});
		await contractIaJsX5X.deposeBoss2.call(newBoss2Jkq3iLq, {from: accounts[3]});
		await contractIaJsX5X.withdrawERC20.call(ERC20TokenRcPRrmg, recipientWgQpVPq, valueJX7aV06, {from: accounts[4]});
		await contractIaJsX5X.setRate.call(newRateGNNKk6V, {from: accounts[2]});
		await contractIaJsX5X.deposeBoss2.call(newBoss2EgYGiCm, {from: accounts[1]});

		assert.equal(nullb1qWSi, 2782380)
		await expect(contractIaJsX5X.deposeBoss2.call(newBoss2Jkq3iLq, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrz2mLTId = accounts[4]
		const FOSTERAddrHP46lDx = accounts[0]
		const initialRateRKXgZcg = BigInt("1580")
		const initialPeriodz37qaTJ = BigInt("340")
		const initialOwnerSP9SMlD = accounts[4]
		const contractGC3yqwu = await Reseller.new(USDTAddrz2mLTId, FOSTERAddrHP46lDx, initialRateRKXgZcg, initialPeriodz37qaTJ, initialOwnerSP9SMlD, {from: accounts[5]});
		const commentzShVHOu = "RxCbmm8rMJdgEJxjgjmlOHBlYiNnHXQRU9en4chhBTQfs2J8zXJBxchpTFz1fJZyjBM9JbibP2slB7GHeZ5QJgsCQznqGk9H6"
		const _ref5tANFW6Z = accounts[3]
		const _ref4DAjKA6Z = accounts[1]
		const _ref3t01xOIt = "0x0000000000000000000000000000000000000001"
		const _ref2vPYApHz = accounts[4]
		const _ref1fMr7SG4 = "0x0000000000000000000000000000000000000001"
		const valuesXIxo3U = BigInt("658")
		const accountjcqMTqN = "0x0000000000000000000000000000000000000001"
		const _ref5rAtWcIO = accounts[5]
		const _ref4FtrU3Os = accounts[4]
		const _ref3EpP2SjR = accounts[0]
		const _ref2CjojzGH = accounts[1]
		const _ref1vEYYJ1x = accounts[2]
		const valuecBMT9fP = BigInt("905")
		const newBoss2zFD0Ds9 = accounts[4]
		const newRatecHvemuu = BigInt("377")
		await contractGC3yqwu.purchase.call(valuesXIxo3U, _ref1fMr7SG4, _ref2vPYApHz, _ref3t01xOIt, _ref4DAjKA6Z, _ref5tANFW6Z, commentzShVHOu, {from: "0x0000000000000000000000000000000000000001"});
		const nullR2uKOxW = await contractGC3yqwu.allowanceFOSTER.call(accountjcqMTqN, {from: "0x0000000000000000000000000000000000000001"});
		await contractGC3yqwu.buy.call(valuecBMT9fP, _ref1vEYYJ1x, _ref2CjojzGH, _ref3EpP2SjR, _ref4FtrU3Os, _ref5rAtWcIO, {from: accounts[4]});
		await contractGC3yqwu.deposeBoss2.call(newBoss2zFD0Ds9, {from: accounts[3]});
		await contractGC3yqwu.setRate.call(newRatecHvemuu, {from: accounts[2]});

		await expect(contractGC3yqwu.purchase.call(valuesXIxo3U, _ref1fMr7SG4, _ref2vPYApHz, _ref3t01xOIt, _ref4DAjKA6Z, _ref5tANFW6Z, commentzShVHOu, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrRNeP9y7 = accounts[3]
		const FOSTERAddrkDHDkF6 = accounts[3]
		const initialRatevQQf5Oc = BigInt("1295")
		const initialPeriodctGk5k = BigInt("1364")
		const initialOwnerD8mSVDs = accounts[3]
		const contractbWd7foa = await Reseller.new(USDTAddrRNeP9y7, FOSTERAddrkDHDkF6, initialRatevQQf5Oc, initialPeriodctGk5k, initialOwnerD8mSVDs, {from: accounts[5]});
		const valueSqdXEqU = BigInt("1916")
		const newPeriodpCLZDi = BigInt("631")
		const accountD52I2eB = accounts[0]
		const newBoss4wbeHkBU = accounts[4]
		const newRateaGhw1sz = BigInt("1722")
		const commentKh3N24e = "KtGLM6HMhdjQYz4xJtiv3mgcNBSlKx6s6Dqrv3X1pATehRggjrSyNG4tucBMkE6"
		const _ref5AIFumpZ = accounts[5]
		const _ref4XW360u5 = accounts[0]
		const _ref3nTcvua5 = accounts[1]
		const _ref2xZMgMbF = accounts[2]
		const _ref1JxsKmZn = accounts[3]
		const valueoB8ZgPq = BigInt("686")
		await contractbWd7foa.withdraw.call(valueSqdXEqU, {from: accounts[0]});
		await contractbWd7foa.setPeriod.call(newPeriodpCLZDi, {from: accounts[4]});
		const nullwAT2xNd = await contractbWd7foa.balanceUSDT.call(accountD52I2eB, {from: accounts[4]});
		await contractbWd7foa.deposeBoss4.call(newBoss4wbeHkBU, {from: accounts[5]});
		await contractbWd7foa.setRate.call(newRateaGhw1sz, {from: accounts[0]});
		await contractbWd7foa.purchase.call(valueoB8ZgPq, _ref1JxsKmZn, _ref2xZMgMbF, _ref3nTcvua5, _ref4XW360u5, _ref5AIFumpZ, commentKh3N24e, {from: accounts[0]});

		await expect(contractbWd7foa.withdraw.call(valueSqdXEqU, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrCk1jtdo = accounts[4]
		const FOSTERAddrJGZ8oQD = accounts[0]
		const initialRateRAlAe3 = BigInt("1580")
		const initialPeriodMKx9vU8 = BigInt("340")
		const initialOwnerb2oKydC = accounts[4]
		const contractu1IsDXO = await Reseller.new(USDTAddrCk1jtdo, FOSTERAddrJGZ8oQD, initialRateRAlAe3, initialPeriodMKx9vU8, initialOwnerb2oKydC, {from: accounts[5]});
		const accountjW3XfrY = accounts[3]
		const _ref5dn7X5lP = accounts[5]
		const _ref4bN2rshJ = accounts[4]
		const _ref3xgKvA7q = accounts[0]
		const _ref2AwQiuX = accounts[1]
		const _ref1zgXLDt8 = accounts[2]
		const valueIa59qR = BigInt("905")
		const newBoss1DTVpFSe = accounts[0]
		const _ref5vzip0Vz = accounts[2]
		const _ref4cd6oMV = accounts[5]
		const _ref3jJriQLN = accounts[2]
		const _ref2PRMubHV = accounts[1]
		const _ref1lNFgEr = "0x0000000000000000000000000000000000000001"
		const valuengSXdGT = BigInt("65")
		const newRatemlpjNdT = BigInt("377")
		const nullT7hD9yw = await contractu1IsDXO.balanceUSDT.call(accountjW3XfrY, {from: accounts[1]});
		await contractu1IsDXO.buy.call(valueIa59qR, _ref1zgXLDt8, _ref2AwQiuX, _ref3xgKvA7q, _ref4bN2rshJ, _ref5dn7X5lP, {from: accounts[4]});
		await contractu1IsDXO.deposeBoss1.call(newBoss1DTVpFSe, {from: accounts[0]});
		await contractu1IsDXO.buy.call(valuengSXdGT, _ref1lNFgEr, _ref2PRMubHV, _ref3jJriQLN, _ref4cd6oMV, _ref5vzip0Vz, {from: accounts[4]});
		await contractu1IsDXO.setRate.call(newRatemlpjNdT, {from: accounts[2]});

		await expect(contractu1IsDXO.balanceUSDT.call(accountjW3XfrY, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddroYAP0HC = accounts[4]
		const FOSTERAddrUtxhyn = accounts[2]
		const initialRateruzkzpv = BigInt("1952")
		const initialPeriodJWh2IF6 = BigInt("1696")
		const initialOwnervfFWjmt = accounts[5]
		const contractZb5YMnL = await Reseller.new(USDTAddroYAP0HC, FOSTERAddrUtxhyn, initialRateruzkzpv, initialPeriodJWh2IF6, initialOwnervfFWjmt, {from: accounts[0]});
		const valuelxWMLYu = BigInt("1523")
		const recipientCBcPVwK = accounts[3]
		const ERC20TokensZH56r = accounts[5]
		const newMinimumcGiWnOX = BigInt("1774")
		const newRateAoRqvHR = BigInt("641")
		const valuekkwjK7 = BigInt("1585")
		const comment4UQHGF = "T3Q3K1"
		const _ref5NQqGbBq = accounts[2]
		const _ref4L448IgY = accounts[1]
		const _ref3ufYQZr = accounts[3]
		const _ref2phh9wgx = accounts[5]
		const _ref1IGBOWqj = "0x0000000000000000000000000000000000000001"
		const valued3LMRoq = BigInt("605")
		await contractZb5YMnL.withdrawERC20.call(ERC20TokensZH56r, recipientCBcPVwK, valuelxWMLYu, {from: accounts[2]});
		await contractZb5YMnL.setMinimum.call(newMinimumcGiWnOX, {from: accounts[1]});
		await contractZb5YMnL.setRate.call(newRateAoRqvHR, {from: accounts[4]});
		await contractZb5YMnL.withdraw.call(valuekkwjK7, {from: "0x0000000000000000000000000000000000000001"});
		await contractZb5YMnL.purchase.call(valued3LMRoq, _ref1IGBOWqj, _ref2phh9wgx, _ref3ufYQZr, _ref4L448IgY, _ref5NQqGbBq, comment4UQHGF, {from: accounts[4]});

		await expect(contractZb5YMnL.withdrawERC20.call(ERC20TokensZH56r, recipientCBcPVwK, valuelxWMLYu, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrW4HygMZ = accounts[4]
		const FOSTERAddru558JFn = accounts[0]
		const initialRateRr7fe5g = BigInt("1580")
		const initialPeriodJCsYtrB = BigInt("340")
		const initialOwnerDzM5n10 = accounts[4]
		const contractowip0sC = await Reseller.new(USDTAddrW4HygMZ, FOSTERAddru558JFn, initialRateRr7fe5g, initialPeriodJCsYtrB, initialOwnerDzM5n10, {from: accounts[5]});
		const account7AKSCQ = "0x0000000000000000000000000000000000000001"
		const _ref5JBqS1Vt = accounts[5]
		const _ref4sTSsUY = accounts[4]
		const _ref3pj3uTzv = accounts[0]
		const _ref2WNoV7x = accounts[1]
		const _ref1nU4jUIe = accounts[2]
		const valueGYyxyh = BigInt("905")
		const newBoss2KNco72u = accounts[4]
		const newRatevBt0yff = BigInt("377")
		const nullMsQ8dOf = await contractowip0sC.allowanceFOSTER.call(account7AKSCQ, {from: "0x0000000000000000000000000000000000000001"});
		await contractowip0sC.buy.call(valueGYyxyh, _ref1nU4jUIe, _ref2WNoV7x, _ref3pj3uTzv, _ref4sTSsUY, _ref5JBqS1Vt, {from: accounts[4]});
		await contractowip0sC.deposeBoss2.call(newBoss2KNco72u, {from: accounts[3]});
		await contractowip0sC.setRate.call(newRatevBt0yff, {from: accounts[2]});

		await expect(contractowip0sC.allowanceFOSTER.call(account7AKSCQ, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrYq2yNdV = accounts[4]
		const FOSTERAddrpgJY5BW = accounts[2]
		const initialRaten7E6OB8 = BigInt("1952")
		const initialPeriodJOYOHgk = BigInt("1696")
		const initialOwnerzFgFkN9 = accounts[5]
		const contractyG1UfX = await Reseller.new(USDTAddrYq2yNdV, FOSTERAddrpgJY5BW, initialRaten7E6OB8, initialPeriodJOYOHgk, initialOwnerzFgFkN9, {from: accounts[0]});
		const newFeek8AHrOf = BigInt("39")
		const valuev2WVsZw = BigInt("1523")
		const recipientvMqxRdF = accounts[3]
		const ERC20TokenOZIo8w = accounts[5]
		const _periodf6G6c62 = BigInt("1592")
		const amountLIEX2tj = BigInt("977")
		const recipientY5o0ZcE = accounts[5]
		const newMinimumUopNtwW = BigInt("1762")
		const newRateWoJl8R = BigInt("641")
		const accountx46uKY8 = accounts[2]
		const valuezfC8GXY = BigInt("1531")
		const value9d1VQT = BigInt("1286")
		const _ref5qCwveaR = accounts[4]
		const _ref4ZqkzRdo = accounts[3]
		const _ref3SZ771Tn = accounts[1]
		const _ref2GBmFgZ3 = accounts[0]
		const _ref1FN58QS1 = accounts[2]
		const valueij3fjS6 = BigInt("1816")
		const commentVS11zub = "T3Q3K1"
		const _ref5tOSeEGv = accounts[2]
		const _ref4Z7e4Z68 = accounts[1]
		const _ref3w09Y1bF = accounts[3]
		const _ref2reti8uD = accounts[5]
		const _ref1yiACco8 = "0x0000000000000000000000000000000000000001"
		const valuemjyFYCj = BigInt("605")
		await contractyG1UfX.setFee.call(newFeek8AHrOf, {from: accounts[3]});
		await contractyG1UfX.withdrawERC20.call(ERC20TokenOZIo8w, recipientvMqxRdF, valuev2WVsZw, {from: accounts[2]});
		await contractyG1UfX.freezeAndTransfer.call(recipientY5o0ZcE, amountLIEX2tj, _periodf6G6c62, {from: accounts[5]});
		await contractyG1UfX.setMinimum.call(newMinimumUopNtwW, {from: accounts[1]});
		await contractyG1UfX.setRate.call(newRateWoJl8R, {from: accounts[4]});
		const nullASoAArf = await contractyG1UfX.balanceUSDT.call(accountx46uKY8, {from: accounts[5]});
		await contractyG1UfX.withdraw.call(valuezfC8GXY, {from: "0x0000000000000000000000000000000000000001"});
		await contractyG1UfX.withdraw.call(value9d1VQT, {from: "0x0000000000000000000000000000000000000001"});
		await contractyG1UfX.buy.call(valueij3fjS6, _ref1FN58QS1, _ref2GBmFgZ3, _ref3SZ771Tn, _ref4ZqkzRdo, _ref5qCwveaR, {from: accounts[2]});
		await contractyG1UfX.purchase.call(valuemjyFYCj, _ref1yiACco8, _ref2reti8uD, _ref3w09Y1bF, _ref4Z7e4Z68, _ref5tOSeEGv, commentVS11zub, {from: accounts[4]});

		await expect(contractyG1UfX.setFee.call(newFeek8AHrOf, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrQ5NWQ05 = accounts[4]
		const FOSTERAddrp9dkkhg = accounts[0]
		const initialRatesVNdLZ6 = BigInt("1580")
		const initialPeriodp9UIQtZ = BigInt("340")
		const initialOwnerCkyQ89 = accounts[4]
		const contractOnvofm7 = await Reseller.new(USDTAddrQ5NWQ05, FOSTERAddrp9dkkhg, initialRatesVNdLZ6, initialPeriodp9UIQtZ, initialOwnerCkyQ89, {from: accounts[5]});
		const newMinimumj74Klq = BigInt("1637")
		const valuebWcDkww = BigInt("1172")
		const _ref5W5SnftL = accounts[5]
		const _ref4XYbvww3 = accounts[4]
		const _ref3pxQetkT = accounts[0]
		const _ref2NgIVsHR = accounts[1]
		const _ref1Qs3D4Zm = accounts[3]
		const valueYvzFyvU = BigInt("905")
		await contractOnvofm7.setMinimum.call(newMinimumj74Klq, {from: accounts[5]});
		await contractOnvofm7.switchState.call({from: accounts[2]});
		await contractOnvofm7.withdraw.call(valuebWcDkww, {from: accounts[0]});
		await contractOnvofm7.buy.call(valueYvzFyvU, _ref1Qs3D4Zm, _ref2NgIVsHR, _ref3pxQetkT, _ref4XYbvww3, _ref5W5SnftL, {from: accounts[4]});

		await expect(contractOnvofm7.setMinimum.call(newMinimumj74Klq, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrQ8KvpTC = accounts[4]
		const FOSTERAddraVPqBCG = accounts[0]
		const initialRatehpKBKdA = BigInt("1580")
		const initialPeriodUhu9nxX = BigInt("340")
		const initialOwnerF4M5q4z = accounts[4]
		const contractGPEeVg = await Reseller.new(USDTAddrQ8KvpTC, FOSTERAddraVPqBCG, initialRatehpKBKdA, initialPeriodUhu9nxX, initialOwnerF4M5q4z, {from: accounts[5]});
		const newPeriodJH8BRsr = BigInt("1660")
		const _ref5DklsdT7 = accounts[5]
		const _ref4iXSggXc = accounts[4]
		const _ref3fBOGoUe = accounts[0]
		const _ref2HgXZZFl = accounts[1]
		const _ref1jr1lcY = accounts[2]
		const valueAf8qBja = BigInt("905")
		await contractGPEeVg.setPeriod.call(newPeriodJH8BRsr, {from: "0x0000000000000000000000000000000000000001"});
		await contractGPEeVg.buy.call(valueAf8qBja, _ref1jr1lcY, _ref2HgXZZFl, _ref3fBOGoUe, _ref4iXSggXc, _ref5DklsdT7, {from: accounts[4]});

		await expect(contractGPEeVg.setPeriod.call(newPeriodJH8BRsr, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrbfvLKz3 = accounts[4]
		const FOSTERAddrOqDKBV1 = accounts[0]
		const initialRateWdwZpA = BigInt("1580")
		const initialPeriodw0ohJbg = BigInt("340")
		const initialOwnerVFCxXUE = accounts[4]
		const contractQjzk3Pr = await Reseller.new(USDTAddrbfvLKz3, FOSTERAddrOqDKBV1, initialRateWdwZpA, initialPeriodw0ohJbg, initialOwnerVFCxXUE, {from: accounts[5]});
		const level5JoHTHIY = BigInt("238")
		const level4HuxCZJ = BigInt("163")
		const level3P34DLJR = BigInt("205")
		const level2VtbueL = BigInt("26")
		const level1tzLOKaf = BigInt("26")
		const valuef4TDQ0Y = BigInt("343")
		const _ref5TeoD44S = accounts[5]
		const _ref4zUHNzKF = accounts[4]
		const _ref3L274NpA = accounts[0]
		const _ref2oGmWy5o = accounts[1]
		const _ref1XD4r45Z = accounts[2]
		const valueiEB95uu = BigInt("1413")
		await contractQjzk3Pr.setRefBonus.call(level1tzLOKaf, level2VtbueL, level3P34DLJR, level4HuxCZJ, level5JoHTHIY, {from: accounts[2]});
		await contractQjzk3Pr.withdraw.call(valuef4TDQ0Y, {from: accounts[3]});
		await contractQjzk3Pr.buy.call(valueiEB95uu, _ref1XD4r45Z, _ref2oGmWy5o, _ref3L274NpA, _ref4zUHNzKF, _ref5TeoD44S, {from: accounts[4]});

		await expect(contractQjzk3Pr.setRefBonus.call(level1tzLOKaf, level2VtbueL, level3P34DLJR, level4HuxCZJ, level5JoHTHIY, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrvEGfYme = accounts[5]
		const FOSTERAddrUFpLWYx = accounts[2]
		const initialRateoBqUDEg = BigInt("998")
		const initialPeriod2xj1c9 = BigInt("1591")
		const initialOwneriZ6FsBR = accounts[2]
		const contractaIFfHWn = await Reseller.new(USDTAddrvEGfYme, FOSTERAddrUFpLWYx, initialRateoBqUDEg, initialPeriod2xj1c9, initialOwneriZ6FsBR, {from: accounts[3]});
		const accountf9q0UkS = accounts[3]
		const commentCr4ICYv = "KDHagVn6Z7d5m2mhjs40LhXs"
		const _ref5ht8DIo1 = accounts[2]
		const _ref4p3IwjJx = accounts[1]
		const _ref3IfNWVgX = accounts[4]
		const _ref2JsCCQGr = accounts[2]
		const _ref1US3sYoh = accounts[2]
		const valueYZRSdx4 = BigInt("968")
		const valuexHFj8ev = BigInt("1692")
		const amountsX3nAme = BigInt("1969")
		const accountzLivacO = accounts[2]
		const accountShnMPtx = accounts[2]
		const nullEt1P6Zu = await contractaIFfHWn.balanceFOSTER.call(accountf9q0UkS, {from: accounts[3]});
		await contractaIFfHWn.purchase.call(valueYZRSdx4, _ref1US3sYoh, _ref2JsCCQGr, _ref3IfNWVgX, _ref4p3IwjJx, _ref5ht8DIo1, commentCr4ICYv, {from: accounts[2]});
		await contractaIFfHWn.withdraw.call(valuexHFj8ev, {from: accounts[1]});
		const nullBBeF55o = await contractaIFfHWn.getEstimation.call(amountsX3nAme, {from: accounts[1]});
		const nullKrmUXg = await contractaIFfHWn.allowanceFOSTER.call(accountzLivacO, {from: accounts[1]});
		const nullZ7q85P = await contractaIFfHWn.balanceUSDT.call(accountShnMPtx, {from: accounts[0]});

		await expect(contractaIFfHWn.balanceFOSTER.call(accountf9q0UkS, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})