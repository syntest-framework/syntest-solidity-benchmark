const OnXFinance = artifacts.require("OnXFinance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('OnXFinance', (accounts) => {
	it('test for OnXFinance', async () => {
		const stringllJqrdM = "Gzj2MXAgEiX44iSmSWIu6yWK36KFHfDbO6YaABSG71q7qzkgsUjcOo8AVVHRaZjzzmNmDz6"
		const string3hUxon = "GEkLAL8yrOpcC18C1tW"
		const uintTNHTked = BigInt("154")
		const OnXFinancexejEPMf = await OnXFinance.new(stringllJqrdM, string3hUxon, uintTNHTked, {from: accounts[4]});
		const uintH5reJk5 = BigInt("1642")
		const addressqzzNHoJ = accounts[0]
		const uintDCS7NTa = BigInt("537")
		const addressLzgykmu = accounts[3]
		const addressMPSWFv3 = "0x0000000000000000000000000000000000000001"
		const stringcE03Bht = await OnXFinancexejEPMf.name.call({from: accounts[0]});
//		const boolC3AuhGc = await OnXFinancexejEPMf.decreaseAllowance.call(addressqzzNHoJ, uintH5reJk5, {from: accounts[2]});
//		const boolVLe0Yht = await OnXFinancexejEPMf.approve.call(addressLzgykmu, uintDCS7NTa, {from: accounts[0]});
//		const uintCEcZUXO = await OnXFinancexejEPMf.balanceOf.call(addressMPSWFv3, {from: accounts[5]});

		assert.equal(stringcE03Bht, "Gzj2MXAgEiX44iSmSWIu6yWK36KFHfDbO6YaABSG71q7qzkgsUjcOo8AVVHRaZjzzmNmDz6")
		await expect(OnXFinancexejEPMf.decreaseAllowance.call(addressqzzNHoJ, uintH5reJk5, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringM29WC8w = "JgS8O4aSbBtN0akBcXVuPn9T38RCgPVbzLvKHuvfjdYVOTdnjombbGLIpgrhwP3MKd5sQKMlMGaAWk"
		const stringW77ixxu = "luaQWEsIc5WZI9SULwwbbx6xHCTEpsvUe2mNlTqbqDi9xH6Mn"
		const uintQ4XdaF5 = BigInt("1404")
		const OnXFinanceWmXBei = await OnXFinance.new(stringM29WC8w, stringW77ixxu, uintQ4XdaF5, {from: accounts[3]});
		const addressq6GK6mz = accounts[3]
		const uint2sP2mA = BigInt("1344")
		const addresspVtN3nW = accounts[2]
		const uintpkPJTzr = BigInt("548")
		const addresss4agmYA = accounts[2]
		const uintDaVOh9P = BigInt("712")
		const addressL9Y77e = "0x0000000000000000000000000000000000000001"
		const stringFLm8uXo = await OnXFinanceWmXBei.name.call({from: accounts[0]});
		const uintt5VJiDe = await OnXFinanceWmXBei.balanceOf.call(addressq6GK6mz, {from: accounts[3]});
//		const boolAzrxFGV = await OnXFinanceWmXBei.transfer.call(addresspVtN3nW, uint2sP2mA, {from: accounts[5]});
//		const boolGrNd2jq = await OnXFinanceWmXBei.transfer.call(addresss4agmYA, uintpkPJTzr, {from: accounts[0]});
//		const uintUZQ1sH = await OnXFinanceWmXBei.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolrRysIt = await OnXFinanceWmXBei.transfer.call(addressL9Y77e, uintDaVOh9P, {from: accounts[5]});

		assert.equal(stringFLm8uXo, "JgS8O4aSbBtN0akBcXVuPn9T38RCgPVbzLvKHuvfjdYVOTdnjombbGLIpgrhwP3MKd5sQKMlMGaAWk")
		assert.equal(uintt5VJiDe, BigInt("1404000000000000000000"))
		await expect(OnXFinanceWmXBei.transfer.call(addresspVtN3nW, uint2sP2mA, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringX81Xnd2 = "wmgsmbwqK6ysFaCd2xDd3iCyHTbILV6zsHHnPHxzL2pAvSd9uas76svyQpm8TQYyMOp44e8"
		const stringHl4Y3nk = "gTkHFtGhqfHxObEGNDIc7FmHnPF9CM0qu6puUJvMhhxXqJZwEg"
		const uintaH0vWv = BigInt("1819")
		const OnXFinancevZ93l69 = await OnXFinance.new(stringX81Xnd2, stringHl4Y3nk, uintaH0vWv, {from: accounts[3]});
		const addressTgO1S6s = accounts[2]
		const addressqcBShE9 = accounts[2]
		const uintj6fSbpk = BigInt("530")
		const addressRipT6lP = accounts[3]
		const addressQfIn8lg = accounts[4]
		const uintFSuxMVq = BigInt("1376")
		const addressyJWFFxy = accounts[1]
		const addressznZCe9l = accounts[0]
		const uintGd3Eznp = await OnXFinancevZ93l69.allowance.call(addressqcBShE9, addressTgO1S6s, {from: accounts[2]});
		const stringkTw71He = await OnXFinancevZ93l69.symbol.call({from: accounts[5]});
		const stringdgm7rdd = await OnXFinancevZ93l69.symbol.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolFd7fwTQ = await OnXFinancevZ93l69.transferFrom.call(addressQfIn8lg, addressRipT6lP, uintj6fSbpk, {from: accounts[3]});
//		const booleFcv8zA = await OnXFinancevZ93l69.transferFrom.call(addressznZCe9l, addressyJWFFxy, uintFSuxMVq, {from: accounts[0]});

		assert.equal(stringdgm7rdd, "gTkHFtGhqfHxObEGNDIc7FmHnPF9CM0qu6puUJvMhhxXqJZwEg")
		assert.equal(stringkTw71He, "gTkHFtGhqfHxObEGNDIc7FmHnPF9CM0qu6puUJvMhhxXqJZwEg")
		assert.equal(uintGd3Eznp, BigInt("0"))
		await expect(OnXFinancevZ93l69.transferFrom.call(addressQfIn8lg, addressRipT6lP, uintj6fSbpk, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringJknTjsh = "rchVzJd4RDooLddBN6lasvVBEvaP1WePCTcYa"
		const stringx4DHkuE = "3juj2nz1tzPtUmizakUN98VghHwAjpyk3voqJuYp5WmnvvzOgo4"
		const uintTFA6hJm = BigInt("1249")
		const OnXFinance3R1FmH = await OnXFinance.new(stringJknTjsh, stringx4DHkuE, uintTFA6hJm, {from: accounts[5]});
		const uintVZo50Ya = BigInt("231")
		const addressJmxcY7v = accounts[1]
		const uintIPO3ZVS = BigInt("346")
		const addressOXJGgtI = accounts[4]
		const uinthk1tkc = BigInt("111")
		const addressjgH0hE7 = accounts[1]
		const uinteejqUI5 = BigInt("1443")
		const addressjfciwu7 = accounts[3]
		const uintX4P8DOk = BigInt("251")
		const addressWcqLxBs = accounts[3]
		const booltqDuxPZ = await OnXFinance3R1FmH.approve.call(addressJmxcY7v, uintVZo50Ya, {from: accounts[4]});
		const boolVtltjzL = await OnXFinance3R1FmH.approve.call(addressOXJGgtI, uintIPO3ZVS, {from: "0x0000000000000000000000000000000000000001"});
//		const boollAGxeOM = await OnXFinance3R1FmH.transfer.call(addressjgH0hE7, uinthk1tkc, {from: accounts[4]});
//		const boolOZGsuI1 = await OnXFinance3R1FmH.approve.call(addressjfciwu7, uinteejqUI5, {from: accounts[3]});
//		const stringsqOZ6c = await OnXFinance3R1FmH.symbol.call({from: accounts[4]});
//		const boolqx18HH1 = await OnXFinance3R1FmH.approve.call(addressWcqLxBs, uintX4P8DOk, {from: accounts[5]});

		assert.equal(boolVtltjzL, true)
		assert.equal(booltqDuxPZ, true)
		await expect(OnXFinance3R1FmH.transfer.call(addressjgH0hE7, uinthk1tkc, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringxjrxUbp = "jQoWzCB9RR2XITaeBxpUao3eeoCrXqzMWiStKGYWZEis80V5LPj4QsGjebWtTpY65o6RQdH2r5XVmytQ45ItT1wOUVqrXRi"
		const stringMCgt1Yo = "M"
		const uintuPxDKGE = BigInt("1599")
		const OnXFinanceYIzK58h = await OnXFinance.new(stringxjrxUbp, stringMCgt1Yo, uintuPxDKGE, {from: "0x0000000000000000000000000000000000000001"});
		const uintv8NeunR = BigInt("1220")
		const addressjUssjp7 = accounts[0]
		const uintGIqjyiQ = BigInt("742")
		const addressgRaf5GT = accounts[2]
		const addressU6FStqE = "0x0000000000000000000000000000000000000001"
		const addressfdvqcIH = accounts[1]
		const uintJJwYceO = BigInt("1389")
		const addressw3npx9B = accounts[4]
		const boolsLGb7A = await OnXFinanceYIzK58h.decreaseAllowance.call(addressjUssjp7, uintv8NeunR, {from: accounts[5]});
		const boollNWKb58 = await OnXFinanceYIzK58h.approve.call(addressgRaf5GT, uintGIqjyiQ, {from: accounts[3]});
		const uintdWjWWH6 = await OnXFinanceYIzK58h.allowance.call(addressfdvqcIH, addressU6FStqE, {from: accounts[1]});
		const uint8VPaCHvv = await OnXFinanceYIzK58h.decimals.call({from: accounts[5]});
		const boolTPPnYfp = await OnXFinanceYIzK58h.decreaseAllowance.call(addressw3npx9B, uintJJwYceO, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for OnXFinance', async () => {
		const stringK6Fd2E = "LyhRexQ4KOUyAcCCLWovDDUyquxnngimJz8a0nB1Ka8lcelhjHFHPVos4sJAa"
		const stringhlKv31R = "dMRfHkvesG6eyE"
		const uintYjebQG1 = BigInt("1")
		const OnXFinancew2jL0VU = await OnXFinance.new(stringK6Fd2E, stringhlKv31R, uintYjebQG1, {from: accounts[3]});
		const uintJol94of = BigInt("634")
		const addressOyXvX16 = accounts[3]
		const uintQUeS4mU = BigInt("123")
		const addressDwEItSo = accounts[3]
		const addressctao2w = "0x0000000000000000000000000000000000000001"
		const uintuhUWH26 = BigInt("790")
		const addressiGN76nt = accounts[0]
		const boolpqPnQp8 = await OnXFinancew2jL0VU.approve.call(addressOyXvX16, uintJol94of, {from: accounts[0]});
//		const boolQoDdmG5 = await OnXFinancew2jL0VU.transfer.call(addressDwEItSo, uintQUeS4mU, {from: accounts[4]});
//		const uinttupXrip = await OnXFinancew2jL0VU.balanceOf.call(addressctao2w, {from: accounts[3]});
//		const boolNpyXOWD = await OnXFinancew2jL0VU.approveAndCall.call(addressiGN76nt, uintuhUWH26, {from: accounts[0]});

		assert.equal(boolpqPnQp8, true)
		await expect(OnXFinancew2jL0VU.transfer.call(addressDwEItSo, uintQUeS4mU, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringK6Fd2E = "LyhRexQ4KOUyAcCCLWovDDUyquxnngimJz8a0nB1Ka8lcelhjHFHPVos4sJAa"
		const stringhlKv31R = "dMRfHkvesG6eyE"
		const uintCpu53y8 = BigInt("1")
		const OnXFinancew2jL0VU = await OnXFinance.new(stringK6Fd2E, stringhlKv31R, uintCpu53y8, {from: accounts[3]});
		const uintGdVVnWP = BigInt("634")
		const addressqN3DreS = accounts[3]
		const uintTz6DpCG = BigInt("1072")
		const addressHZszEbG = accounts[3]
		const uintBZb1AhD = BigInt("123")
		const addressxriBKtG = accounts[3]
		const addressOBZA5dC = "0x0000000000000000000000000000000000000001"
		const uintlSWzb8 = BigInt("487")
		const addressSWGKQrM = accounts[0]
		const boolpqPnQp8 = await OnXFinancew2jL0VU.approve.call(addressqN3DreS, uintGdVVnWP, {from: accounts[0]});
		const boolXkOkBkK = await OnXFinancew2jL0VU.approveAndCall.call(addressHZszEbG, uintTz6DpCG, {from: accounts[3]});
//		const boolQoDdmG5 = await OnXFinancew2jL0VU.transfer.call(addressxriBKtG, uintBZb1AhD, {from: accounts[4]});
//		const uinttupXrip = await OnXFinancew2jL0VU.balanceOf.call(addressOBZA5dC, {from: accounts[3]});
//		const boolNpyXOWD = await OnXFinancew2jL0VU.approveAndCall.call(addressSWGKQrM, uintlSWzb8, {from: accounts[0]});

		assert.equal(boolXkOkBkK, true)
		assert.equal(boolpqPnQp8, true)
		await expect(OnXFinancew2jL0VU.transfer.call(addressxriBKtG, uintBZb1AhD, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringX81Xnd2 = "wmgsmbwqK6ysFaCd2xDd3iCyHTbILV6zsHHnPHxzL2pAvSd9uas76svyQpm8TQYyMOp44e8"
		const stringHl4Y3nk = "gTkHFtGhqfHxObEGNDIc7FmHnPF9CM0qu6puUJvMhhxXqJZwEg"
		const uintsdvRRD = BigInt("1819")
		const OnXFinancevZ93l69 = await OnXFinance.new(stringX81Xnd2, stringHl4Y3nk, uintsdvRRD, {from: accounts[3]});
		const address2boGcP = accounts[1]
		const uintSy9XAQq = BigInt("530")
		const addresswuzcNI0 = accounts[3]
		const addressijA5OH = accounts[4]
		const uintUoHqyIO = BigInt("1376")
		const addressOMylWSb = accounts[1]
		const addressqHgaDBY = accounts[0]
		const stringkTw71He = await OnXFinancevZ93l69.symbol.call({from: accounts[5]});
		const stringdgm7rdd = await OnXFinancevZ93l69.symbol.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolunO962U = await OnXFinancevZ93l69.transferownership.call(address2boGcP, {from: accounts[1]});
//		const boolFd7fwTQ = await OnXFinancevZ93l69.transferFrom.call(addressijA5OH, addresswuzcNI0, uintSy9XAQq, {from: accounts[3]});
//		const stringBs0Fa6 = await OnXFinancevZ93l69.symbol.call({from: accounts[4]});
//		const booleFcv8zA = await OnXFinancevZ93l69.transferFrom.call(addressqHgaDBY, addressOMylWSb, uintUoHqyIO, {from: accounts[0]});

		assert.equal(stringdgm7rdd, "gTkHFtGhqfHxObEGNDIc7FmHnPF9CM0qu6puUJvMhhxXqJZwEg")
		assert.equal(stringkTw71He, "gTkHFtGhqfHxObEGNDIc7FmHnPF9CM0qu6puUJvMhhxXqJZwEg")
		await expect(OnXFinancevZ93l69.transferownership.call(address2boGcP, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringX81Xnd2 = "wmgsmbwqK6ysFaCd2xDd3iCyHTbILV6zsHHnPHxzL2pAvSd9uas76svyQpm8TQYyMOp44e8"
		const stringHl4Y3nk = "gTkHFtGhqfHxObEGNDIc7FmHnPF9CM0qu6puUJvMhhxXqJZwEg"
		const uintiZdXfAy = BigInt("1819")
		const OnXFinancevZ93l69 = await OnXFinance.new(stringX81Xnd2, stringHl4Y3nk, uintiZdXfAy, {from: accounts[3]});
		const addresswADwTT4 = accounts[2]
		const uintoLWiPtZ = BigInt("9")
		const addressLBGWXQZ = accounts[4]
		const addressgsg0clv = accounts[3]
		const uintdW0FKFy = BigInt("530")
		const addressb3k0Tc = accounts[3]
		const addressMNkK2e7 = accounts[4]
		const uintZrtqkXk = BigInt("1376")
		const addresshFZXq0u = accounts[1]
		const addressLXiOO71 = accounts[0]
		const boolyg9UwL5 = await OnXFinancevZ93l69.transferownership.call(addresswADwTT4, {from: accounts[3]});
		const stringkTw71He = await OnXFinancevZ93l69.symbol.call({from: accounts[5]});
//		const boolqumZ8NC = await OnXFinancevZ93l69.transferFrom.call(addressgsg0clv, addressLBGWXQZ, uintoLWiPtZ, {from: accounts[2]});
//		const boolFd7fwTQ = await OnXFinancevZ93l69.transferFrom.call(addressMNkK2e7, addressb3k0Tc, uintdW0FKFy, {from: accounts[3]});
//		const booleFcv8zA = await OnXFinancevZ93l69.transferFrom.call(addressLXiOO71, addresshFZXq0u, uintZrtqkXk, {from: accounts[0]});

		assert.equal(boolyg9UwL5, true)
		assert.equal(stringkTw71He, "gTkHFtGhqfHxObEGNDIc7FmHnPF9CM0qu6puUJvMhhxXqJZwEg")
		await expect(OnXFinancevZ93l69.transferFrom.call(addressgsg0clv, addressLBGWXQZ, uintoLWiPtZ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringX81Xnd2 = "wmgsmbwqK6ysFaCd2xDd3iCyHTbILV6zsHHnPHxzL2pAvSd9uas76svyQpm8TQYyMOp44e8"
		const stringHl4Y3nk = "gTkHFtGhqfHxObEGNDIc7FmHnPF9CM0qu6puUJvMhhxXqJZwEg"
		const uintdrcl3SS = BigInt("1819")
		const OnXFinancevZ93l69 = await OnXFinance.new(stringX81Xnd2, stringHl4Y3nk, uintdrcl3SS, {from: accounts[3]});
		const uintGx7qNPT = BigInt("0")
		const addresshCn9VKT = accounts[3]
		const addressVCcWu9j = accounts[2]
		const uintzczBOe = BigInt("69")
		const addressFfPtfja = accounts[5]
		const uintnb4clJ = BigInt("922")
		const addressUjKaldr = accounts[2]
		const uintjW5ATdy = BigInt("530")
		const addresssMPhGWN = accounts[3]
		const addressZmvYFL3 = accounts[4]
		const stringkTw71He = await OnXFinancevZ93l69.symbol.call({from: accounts[5]});
		const boolqumZ8NC = await OnXFinancevZ93l69.transferFrom.call(addressVCcWu9j, addresshCn9VKT, uintGx7qNPT, {from: accounts[2]});
//		const boolwPacvr4 = await OnXFinancevZ93l69.transfer.call(addressFfPtfja, uintzczBOe, {from: accounts[0]});
//		const boolmMbqNT1 = await OnXFinancevZ93l69.approve.call(addressUjKaldr, uintnb4clJ, {from: accounts[4]});
//		const uintTDFAUI1 = await OnXFinancevZ93l69.totalSupply.call({from: accounts[1]});
//		const boolFd7fwTQ = await OnXFinancevZ93l69.transferFrom.call(addressZmvYFL3, addresssMPhGWN, uintjW5ATdy, {from: accounts[3]});

		assert.equal(boolqumZ8NC, true)
		assert.equal(stringkTw71He, "gTkHFtGhqfHxObEGNDIc7FmHnPF9CM0qu6puUJvMhhxXqJZwEg")
		await expect(OnXFinancevZ93l69.transfer.call(addressFfPtfja, uintzczBOe, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})