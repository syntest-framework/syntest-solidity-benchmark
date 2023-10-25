const WheatFarm = artifacts.require("WheatFarm");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('WheatFarm', (accounts) => {
	it('test for WheatFarm', async () => {
		const stringPsYHiZ = "GGkMjuEL2KzQF8RnMhAAKCnG7Q3QaCvl9abjmuveotNyW1BcNDlD"
		const stringruRXeGt = "ELEkCdImBsLoRo7q1x1"
		const uintfLgGg5K = BigInt("1177")
		const WheatFarmdYu5IDw = await WheatFarm.new(stringPsYHiZ, stringruRXeGt, uintfLgGg5K, {from: accounts[3]});
		const uintndDXz2Y = BigInt("1963")
		const addressUwJhQXx = accounts[1]
		const uintmkrL8Dv = BigInt("1148")
		const addresspbxlk9F = accounts[4]
		const boolYkhBTaI = await WheatFarmdYu5IDw.approve.call(addressUwJhQXx, uintndDXz2Y, {from: accounts[2]});
		const stringIUv1yNf = await WheatFarmdYu5IDw.name.call({from: accounts[1]});
//		const boolAOiJsrd = await WheatFarmdYu5IDw.transfer.call(addresspbxlk9F, uintmkrL8Dv, {from: accounts[4]});

		assert.equal(boolYkhBTaI, true)
		assert.equal(stringIUv1yNf, "GGkMjuEL2KzQF8RnMhAAKCnG7Q3QaCvl9abjmuveotNyW1BcNDlD")
		await expect(WheatFarmdYu5IDw.transfer.call(addresspbxlk9F, uintmkrL8Dv, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringmmbEGQ = "besDSQ1167PMrEtQ83IvjdZtmW3Qv2YMGwmL3OXsXI19NePmaKQ5x9jPVaQENI664Qd49Tpl3uiv9zUI"
		const stringY4Jqdj7 = "KuUuYnlw3WPCwWxvNdXAygjwf8TkRONsvbcyGW6CL"
		const uintjzy4nux = BigInt("132")
		const WheatFarmyCJEg6x = await WheatFarm.new(stringmmbEGQ, stringY4Jqdj7, uintjzy4nux, {from: accounts[2]});
		const uintXWf7ra = BigInt("1396")
		const addressKN1whau = accounts[3]
		const uintGC8RZi = BigInt("1550")
		const addressOoUFiyR = accounts[3]
		const uintrhXUCFK = BigInt("1812")
		const addressgAvQS0X = accounts[2]
		const addressgTmrjg5 = accounts[2]
//		const booluoaSQ9Y = await WheatFarmyCJEg6x.decreaseAllowance.call(addressKN1whau, uintXWf7ra, {from: accounts[0]});
//		const boolXl7P7Xd = await WheatFarmyCJEg6x.approveAndCall.call(addressOoUFiyR, uintGC8RZi, {from: accounts[1]});
//		const boolNxRUKws = await WheatFarmyCJEg6x.transferFrom.call(addressgTmrjg5, addressgAvQS0X, uintrhXUCFK, {from: accounts[3]});
//		const uint8zFrsT71 = await WheatFarmyCJEg6x.decimals.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(WheatFarmyCJEg6x.decreaseAllowance.call(addressKN1whau, uintXWf7ra, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringm9vhef9 = "fmSnz6NX9VbncHsKjtf35lHFr7wLXAAsTxfi0eHAjh4lnPgBXusq6W"
		const stringhlEO9t = ""
		const uintDEJoUJJ = BigInt("214")
		const WheatFarmKfXbkM = await WheatFarm.new(stringm9vhef9, stringhlEO9t, uintDEJoUJJ, {from: accounts[3]});
		const uintvk6FrIH = BigInt("1728")
		const addressyMmVArF = accounts[4]
		const uintBoDkeKM = BigInt("480")
		const addressoorKnLZ = "0x0000000000000000000000000000000000000001"
		const uintq4x0GEb = BigInt("736")
		const addressN7E8FHh = accounts[2]
		const uinthX8QkB = BigInt("201")
		const addressSGjfHCX = accounts[0]
		const boolZEeKy1E = await WheatFarmKfXbkM.approve.call(addressyMmVArF, uintvk6FrIH, {from: accounts[3]});
//		const boolNfnMQGq = await WheatFarmKfXbkM.approveAndCall.call(addressoorKnLZ, uintBoDkeKM, {from: accounts[2]});
//		const stringGRquIbx = await WheatFarmKfXbkM.symbol.call({from: accounts[4]});
//		const boolhy5VJE8 = await WheatFarmKfXbkM.transfer.call(addressN7E8FHh, uintq4x0GEb, {from: accounts[2]});
//		const stringmKLv3iH = await WheatFarmKfXbkM.name.call({from: accounts[4]});
//		const boolTCeakWl = await WheatFarmKfXbkM.transfer.call(addressSGjfHCX, uinthX8QkB, {from: accounts[5]});
//		const uint8UK5UUmw = await WheatFarmKfXbkM.decimals.call({from: accounts[2]});

		assert.equal(boolZEeKy1E, true)
		await expect(WheatFarmKfXbkM.approveAndCall.call(addressoorKnLZ, uintBoDkeKM, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringqXoznB = "DIAiyWh8y14rjQxiWPFvC03UiyUF62pCbAzxsal5wFjA6gf5gUfIzLQVnrvD1gjo56S8TU"
		const stringbGqacU8 = "HRpGhSRMAv20TxMFR2pm5XHo2a7mdd"
		const uintNhFEPEO = BigInt("53")
		const WheatFarmagSTNca = await WheatFarm.new(stringqXoznB, stringbGqacU8, uintNhFEPEO, {from: accounts[1]});
		const addresso7D0qV8 = "0x0000000000000000000000000000000000000001"
		const boolGV7Jjby = await WheatFarmagSTNca.transferownership.call(addresso7D0qV8, {from: accounts[1]});

		assert.equal(boolGV7Jjby, true)
	});

	it('test for WheatFarm', async () => {
		const stringWjBLNwY = "iS3mkvh1b1MKBBCW1Sd"
		const stringI8BBxod = "hYHt8DMSjjpqEO9fGhOLjMS7RUmVokxopMFhGGyuMQYVq2h0DbP"
		const uintgjrf27p = BigInt("160")
		const WheatFarmDybBw3O = await WheatFarm.new(stringWjBLNwY, stringI8BBxod, uintgjrf27p, {from: accounts[2]});
		const uintBHg2E7h = BigInt("1553")
		const addressHEHyswN = accounts[5]
		const uintQdwlVCN = BigInt("499")
		const addressm5l8vj = accounts[2]
		const uinti4v6if4 = BigInt("621")
		const addressXIGlJT = accounts[4]
		const addressSk3r0jg = accounts[4]
		const addressMZmcL4f = accounts[2]
		const stringgNiANV = await WheatFarmDybBw3O.symbol.call({from: accounts[5]});
		const uintZaBMcky = await WheatFarmDybBw3O.totalSupply.call({from: accounts[3]});
		const boolZ9w5XCz = await WheatFarmDybBw3O.approve.call(addressHEHyswN, uintBHg2E7h, {from: accounts[0]});
//		const boolrjL5jx = await WheatFarmDybBw3O.transfer.call(addressm5l8vj, uintQdwlVCN, {from: accounts[1]});
//		const boolD1McGI7 = await WheatFarmDybBw3O.approveAndCall.call(addressXIGlJT, uinti4v6if4, {from: accounts[0]});
//		const uintofbVeOt = await WheatFarmDybBw3O.allowance.call(addressMZmcL4f, addressSk3r0jg, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolZ9w5XCz, true)
		assert.equal(stringgNiANV, "hYHt8DMSjjpqEO9fGhOLjMS7RUmVokxopMFhGGyuMQYVq2h0DbP")
		assert.equal(uintZaBMcky, BigInt("160000000000000000000"))
		await expect(WheatFarmDybBw3O.transfer.call(addressm5l8vj, uintQdwlVCN, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringScneqCX = "eH04ZlRc3bWrtscmrIx4wKfskavPQ99"
		const stringxMpcFgS = "hn9AZbrDsQXdV2UjSeu5Im1wM8p7ydiEnBLBbztTsuAq3qbBOz6GD4UAO5QV3K5Hi0veypL7TvoINNa"
		const uintaOMefQI = BigInt("594")
		const WheatFarmiHOY9h5 = await WheatFarm.new(stringScneqCX, stringxMpcFgS, uintaOMefQI, {from: "0x0000000000000000000000000000000000000001"});
		const uintDDgjSik = BigInt("1614")
		const addressrl9BQBf = "0x0000000000000000000000000000000000000001"
		const uintY5CO251 = BigInt("1940")
		const addressNU8LBE8 = accounts[4]
		const uintSrDaH5L = BigInt("4")
		const addressM7gJVxD = accounts[0]
		const addressHuX629V = accounts[3]
		const uintMMw0zRL = BigInt("1242")
		const addressl5Zd2XI = "0x0000000000000000000000000000000000000001"
		const boolU4bqejW = await WheatFarmiHOY9h5.approve.call(addressrl9BQBf, uintDDgjSik, {from: accounts[2]});
		const boolIjXQEyd = await WheatFarmiHOY9h5.approve.call(addressNU8LBE8, uintY5CO251, {from: accounts[4]});
		const boolL3tS04E = await WheatFarmiHOY9h5.transferFrom.call(addressHuX629V, addressM7gJVxD, uintSrDaH5L, {from: accounts[5]});
		const uintNVvLqXs = await WheatFarmiHOY9h5.totalSupply.call({from: accounts[4]});
		const boolN9ZJ9is = await WheatFarmiHOY9h5.approveAndCall.call(addressl5Zd2XI, uintMMw0zRL, {from: accounts[4]});
	});

	it('test for WheatFarm', async () => {
		const stringW7EPOPn = "wP8jTCxvJYlPzC"
		const stringEuGrpYs = "2MKFYBfmfXkLJ6F6IXnYqkVbHw9TUfdKPlHiThOfWzzieisEHHKUEHEynkYnip5DbPhSBjgwTuw4x77fgWG6RK8"
		const uintz9M74dU = BigInt("435")
		const WheatFarmCHFwuDK = await WheatFarm.new(stringW7EPOPn, stringEuGrpYs, uintz9M74dU, {from: accounts[4]});
		const uintkIrHZZt = BigInt("519")
		const addressmkHS6vY = accounts[3]
		const addressZg3RHko = accounts[3]
		const uint8Jvulk0k = await WheatFarmCHFwuDK.decimals.call({from: accounts[0]});
		const stringa0TobCt = await WheatFarmCHFwuDK.name.call({from: accounts[3]});
		const boolLq0vMA9 = await WheatFarmCHFwuDK.approveAndCall.call(addressmkHS6vY, uintkIrHZZt, {from: accounts[4]});
		const uintgfhLFKL = await WheatFarmCHFwuDK.balanceOf.call(addressZg3RHko, {from: accounts[2]});

		assert.equal(boolLq0vMA9, true)
		assert.equal(stringa0TobCt, "wP8jTCxvJYlPzC")
		assert.equal(uint8Jvulk0k, BigInt("18"))
		assert.equal(uintgfhLFKL, BigInt("0"))
	});

	it('test for WheatFarm', async () => {
		const stringqXoznB = "DIAiyWh8y14rjQxiWPFvC03UiyUF62pCbAzxsal5wFjA6gf5gUfIzLQVnrvD1gjo56S8TU"
		const stringbGqacU8 = "HRpGhSRMAv20TxMFR2pm5XHo2a7mdd"
		const uintwaVdTxW = BigInt("53")
		const WheatFarmagSTNca = await WheatFarm.new(stringqXoznB, stringbGqacU8, uintwaVdTxW, {from: accounts[1]});
		const uintIvyCPiV = BigInt("0")
		const address7JfFR8 = accounts[3]
		const addressiuG9ODi = accounts[0]
		const uintvxDvu5 = BigInt("1441")
		const addressNwCD2up = accounts[0]
		const uintE6sHxsC = BigInt("820")
		const addressvyksvHe = accounts[0]
		const uinta1J7JQ8 = BigInt("1278")
		const addressOasvqGG = accounts[3]
		const boologruXzD = await WheatFarmagSTNca.transferFrom.call(addressiuG9ODi, address7JfFR8, uintIvyCPiV, {from: accounts[1]});
		const boolQ7SwT2U = await WheatFarmagSTNca.approveAndCall.call(addressNwCD2up, uintvxDvu5, {from: accounts[1]});
//		const booliJLtftd = await WheatFarmagSTNca.decreaseAllowance.call(addressvyksvHe, uintE6sHxsC, {from: accounts[2]});
//		const boolKvqRCmo = await WheatFarmagSTNca.increaseAllowance.call(addressOasvqGG, uinta1J7JQ8, {from: accounts[4]});

		assert.equal(boolQ7SwT2U, true)
		assert.equal(boologruXzD, true)
		await expect(WheatFarmagSTNca.decreaseAllowance.call(addressvyksvHe, uintE6sHxsC, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})